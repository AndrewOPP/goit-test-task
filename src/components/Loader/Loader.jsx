import { TailSpin } from 'react-loader-spinner';
export const loader = (
  <TailSpin
    height="80"
    width="80"
    color="#3b55c9"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{
      marginTop: '200px',
    }}
    wrapperClass=""
    visible={true}
  />
);
