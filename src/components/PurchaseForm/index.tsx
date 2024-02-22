import InputMask from 'react-input-mask';

// Components
import Button from '../Button';

// Styled components
import { FormContainer, HorizontalGroup, InputGroup } from './styles';

const PurchaseForm = () => (
  <>
    <FormContainer type="delivery">
      <h4>Entrega</h4>
      <InputGroup>
        <label htmlFor="name">Quem irá receber</label>
        <input type="text" id="name" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="address">Endereço</label>
        <input type="text" id="address" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" />
      </InputGroup>
      <HorizontalGroup>
        <InputGroup>
          <label htmlFor="zipCode">CEP</label>
          <InputMask type="text" id="zipCode" mask="99999-999" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="number">Número</label>
          <input type="text" id="number" />
        </InputGroup>
      </HorizontalGroup>
      <InputGroup className="mb-24">
        <label htmlFor="complement">Complemento (opcional)</label>
        <input type="text" id="complement" />
      </InputGroup>
      <Button type="button" title="Continuar com o pagamento">
        Continuar com o pagamento
      </Button>
      <Button type="button" title="Voltar para o carrinho">
        Voltar para o carrinho
      </Button>
    </FormContainer>
    <FormContainer type="payment">
      <h4>Pagamento - Valor a pagar R$ 190,90</h4>
      <InputGroup>
        <label htmlFor="cardOwner">Nome no cartão</label>
        <input type="text" id="cardOwner" />
      </InputGroup>
      <HorizontalGroup>
        <InputGroup>
          <label htmlFor="cardNumber">Número do cartão</label>
          <InputMask type="text" id="cardNumber" mask="9999 9999 9999 9999" />
        </InputGroup>
        <InputGroup className="cvv">
          <label htmlFor="cardSecurityNumber">CVV</label>
          <InputMask type="text" id="cardSecurityNumber" mask="999" />
        </InputGroup>
      </HorizontalGroup>
      <HorizontalGroup className="mb-24">
        <InputGroup>
          <label htmlFor="expirationMonth">Mês de vencimento</label>
          <InputMask type="text" id="expirationMonth" mask="99" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="expirationYear">Ano de vencimento</label>
          <InputMask type="text" id="expirationYear" mask="99" />
        </InputGroup>
      </HorizontalGroup>
      <Button type="button" title="Finalizar pagamento">
        Finalizar pagamento
      </Button>
      <Button type="button" title="Voltar para a edição de endereço">
        Voltar para a edição de endereço
      </Button>
    </FormContainer>
  </>
);

export default PurchaseForm;
