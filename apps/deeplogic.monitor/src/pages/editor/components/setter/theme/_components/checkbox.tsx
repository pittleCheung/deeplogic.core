// import { ROOT_NODE } from '@craftjs/utils';
import { Select } from 'antd';

const options = [
  {
    label: '白色',
    value: 'defaultAlgorithm',
    color: 'white'
  },
  {
    label: '黑色',
    value: 'darkAlgorithm',
    color: 'black'
  },
  {
    label: '深蓝',
    value: 'darkBlue',
    color: '#264E92'
  }
];

function ThemeCheckBox({ value, onChange, setProp }) {
  // const [active, setActive] = useState(value | 'defaultAlgorithm');
  //
  // useEffect(() => {
  //   value && setActive(value);
  // }, [value]);

  const onThemeChange = (val) => {
    onChange?.(val);
    // setActive(val);

    // if (val === 'darkAlgorithm') {
    //   setProp?.(ROOT_NODE, (prop) => {
    //     prop.style.background = '';
    //   });
    // } else {
    //   setProp?.(ROOT_NODE, (prop) => {
    //     prop.style.background = '#ffffff';
    //   });
    // }
  };

  const itemRender = (option) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div
        style={{
          height: 16,
          width: 16,
          backgroundColor: option.data.color,
          border: '1px solid #999',
          flex: '0 1 auto'
        }}
      ></div>
      <div style={{ flex: '1 1 auto' }}>{option.label}</div>
    </div>
  );

  return (
    <Select options={options} value={value} onChange={onThemeChange} optionRender={itemRender} />
    // <div className={css.theme}>
    //   {options.map((option, index) => {
    //     return (
    //       <div
    //         className={`${css.item} ${css[option.label] || ''}`}
    //         key={index}
    //         title={option.label}
    //         onClick={() => onThemeChange(option?.value)}
    //       >
    //         {active === option?.value && <CheckOutlined />}
    //       </div>
    //     );
    //   })}
    // </div>
  );
}

export default ThemeCheckBox;
