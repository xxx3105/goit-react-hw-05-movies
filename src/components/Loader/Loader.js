import { BallTriangle } from 'react-loader-spinner';
import { LoaderPos } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderPos>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="gray"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoaderPos>
  );
}
