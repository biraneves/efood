// Libraries
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Components
import Button from '../Button';

// Styled components
import {
  FormContainer,
  HorizontalGroup,
  InputGroup,
  OrderConfirmation,
} from './styles';
import { RootReducer } from '../../store';
import { getTotalPrice, parseToBRL } from '../../utils';
import { usePurchaseMutation } from '../../services/api';
import { useEffect, useState } from 'react';
import {
  clear,
  showPaymentForm,
  hideForm,
  showDeliveryForm,
  showConfirmation,
  finishPayment,
  finishPurchase,
} from '../../store/reducers/cart';

const PurchaseForm = () => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();
  const { items, formVisible } = useSelector(
    (state: RootReducer) => state.cart,
  );
  const totalPrice = getTotalPrice(items);
  const dispatch = useDispatch();
  const [formIsValid, setFormIsValid] = useState(false);

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardSecurityNumber: '',
      expirationMonth: '',
      expirationYear: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5).required(),
      address: Yup.string().min(5).required(),
      city: Yup.string().min(3).required(),
      zipCode: Yup.string().min(9).max(9).required(),
      addressNumber: Yup.string().required(),
      cardOwner: Yup.string().min(5).required(),
      cardNumber: Yup.string().min(19).max(19).required(),
      cardSecurityNumber: Yup.string().min(3).max(3).required(),
      expirationMonth: Yup.string().min(2).max(2).required(),
      expirationYear: Yup.string().min(4).max(4).required(),
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.addressNumber),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardSecurityNumber),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear),
            },
          },
        },
      });
      form.resetForm();
      dispatch(finishPayment());
      dispatch(showConfirmation());
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched: boolean = fieldName in form.touched;
    const isInvalid: boolean = fieldName in form.errors;

    return isTouched && isInvalid;
  };

  const checkInputIsValid = (fieldName: string): boolean => {
    return !(form.values.name === '' || fieldName in form.errors);
  };

  const cartContent = () => {
    dispatch(hideForm());
  };

  const checkForm = () => {
    const fieldsToCheck: Array<keyof typeof form.values> = [
      'name',
      'address',
      'city',
      'zipCode',
      'addressNumber',
    ];

    const emptyFields: boolean[] = [];
    const fieldsWithErrors: boolean[] = [];

    fieldsToCheck.map((field) => {
      if (form.values[field] === '') emptyFields.push(true);

      switch (field) {
        case 'name':
          fieldsWithErrors.push(form.values[field].length <= 4);
          break;
        case 'address':
          fieldsWithErrors.push(form.values[field].length <= 4);
          break;
        case 'city':
          fieldsWithErrors.push(form.values[field].length <= 2);
          break;
        case 'zipCode':
          fieldsWithErrors.push(form.values[field].length <= 8);
          break;
        case 'addressNumber':
          fieldsWithErrors.push(false);
          break;
      }
    });

    setFormIsValid(
      !(emptyFields.includes(true) || fieldsWithErrors.includes(true)),
    );
  };

  const deliveryForm = () => {
    dispatch(showDeliveryForm());
  };

  const paymentForm = () => {
    if (formIsValid) {
      dispatch(showPaymentForm());
    } else {
      alert('Você precisa informar os campos de endereço antes de prosseguir.');
    }
  };

  const endPurchase = () => {
    dispatch(finishPurchase());
  };

  useEffect(() => {
    if (isSuccess) dispatch(clear());
  }, [isSuccess, dispatch]);

  return (
    <>
      {isSuccess && data && formVisible === 'confirmation' ? (
        <OrderConfirmation>
          <h4>Pedido realizado - {data.orderId}</h4>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button onClick={() => endPurchase()} type="button" title="Concluir">
            Concluir
          </Button>
        </OrderConfirmation>
      ) : (
        <form onChange={checkForm} onSubmit={form.handleSubmit}>
          <FormContainer
            type="delivery"
            className={formVisible === 'delivery' ? 'form-visible' : ''}
          >
            <h4>Entrega</h4>
            <InputGroup>
              <label htmlFor="name">Quem irá receber</label>
              <input
                type="text"
                id="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('name') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('address') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </InputGroup>
            <HorizontalGroup>
              <InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  type="text"
                  id="zipCode"
                  mask="99999-999"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="addressNumber">Número</label>
                <input
                  type="text"
                  id="addressNumber"
                  value={form.values.addressNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('addressNumber') ? 'error' : ''}
                />
              </InputGroup>
            </HorizontalGroup>
            <InputGroup className="mb-24">
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <Button
              onClick={() => paymentForm()}
              type="button"
              title="Continuar com o pagamento"
            >
              Continuar com o pagamento
            </Button>
            <Button
              onClick={() => cartContent()}
              type="button"
              title="Voltar para o carrinho"
            >
              Voltar para o carrinho
            </Button>
          </FormContainer>
          <FormContainer
            type="payment"
            className={formVisible === 'payment' ? 'form-visible' : ''}
          >
            <h4>Pagamento - Valor a pagar {parseToBRL(totalPrice)}</h4>
            <InputGroup>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input
                type="text"
                id="cardOwner"
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardOwner') ? 'error' : ''}
              />
            </InputGroup>
            <HorizontalGroup>
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  mask="9999 9999 9999 9999"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup className="cvv">
                <label htmlFor="cardSecurityNumber">CVV</label>
                <InputMask
                  type="text"
                  id="cardSecurityNumber"
                  mask="999"
                  value={form.values.cardSecurityNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('cardSecurityNumber') ? 'error' : ''
                  }
                />
              </InputGroup>
            </HorizontalGroup>
            <HorizontalGroup className="mb-24">
              <InputGroup>
                <label htmlFor="expirationMonth">Mês de vencimento</label>
                <InputMask
                  type="text"
                  id="expirationMonth"
                  mask="99"
                  value={form.values.expirationMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('expirationMonth') ? 'error' : ''
                  }
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expirationYear">Ano de vencimento</label>
                <InputMask
                  type="text"
                  id="expirationYear"
                  mask="9999"
                  value={form.values.expirationYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('expirationYear') ? 'error' : ''
                  }
                />
              </InputGroup>
            </HorizontalGroup>
            <Button
              onClick={form.submitForm}
              type="button"
              title="Finalizar pagamento"
            >
              {isLoading ? 'Enviando pedido...' : 'Finalizar pagamento'}
            </Button>
            <Button
              onClick={() => deliveryForm()}
              type="button"
              title="Voltar para a edição de endereço"
            >
              Voltar para a edição de endereço
            </Button>
          </FormContainer>
        </form>
      )}
    </>
  );
};

export default PurchaseForm;
