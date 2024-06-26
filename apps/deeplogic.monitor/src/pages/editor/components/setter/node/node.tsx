import { ZIndex } from '../_components';
import { SetterProvider } from '../_hooks/useSetter';
import { Border, Fill, Size } from './__components';

const RenderNodeSetter = ({ show = ['zIndex', 'size', 'border', 'fill'] }) => {
  const tabs = {
    zIndex: <ZIndex />,
    size: <Size />,
    border: <Border />,
    fill: <Fill />
  };
  return (
    <>
      {show?.map((key) => (
        <div key={key}>{tabs[key]}</div>
      ))}
    </>
  );
};

function NodeSetter(props) {
  return (
    <SetterProvider {...props}>
      <RenderNodeSetter show={props?.show} />
    </SetterProvider>
  );
}

export default NodeSetter;
