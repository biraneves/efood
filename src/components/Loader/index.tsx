// Libraries
import { SyncLoader } from 'react-spinners';

// Styled components
import { LoaderContainer } from './styles';

const Loader = () => (
  <LoaderContainer>
    <SyncLoader />
  </LoaderContainer>
);

export default Loader;
