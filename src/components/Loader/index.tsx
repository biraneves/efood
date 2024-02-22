// Libraries
import { SyncLoader } from 'react-spinners';

// Styled components
import { LoaderContainer } from './styles';
import { colors } from '../../styles';

const Loader = () => (
  <LoaderContainer>
    <SyncLoader color={colors.primary} />
  </LoaderContainer>
);

export default Loader;
