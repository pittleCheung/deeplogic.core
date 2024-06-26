import { useEffect, useRef } from 'react';
import IconProps from './IconProps';

export default function SvgIcon(props: IconProps) {
  const root = useRef<SVGSVGElement>(null);
  const { size = '1em', width, height, spin, rtl, color, fill, stroke, className, svg, ...rest } = props;
  const _width = width || size;
  const _height = height || size;
  const _stroke = stroke || color;
  const _fill = fill || color;
  useEffect(() => {
    if (!_fill) {
      (root.current as SVGSVGElement)?.querySelectorAll('[data-follow-fill]').forEach((item) => {
        item.setAttribute('fill', item.getAttribute('data-follow-fill') || '');
      });
    }
    if (!_stroke) {
      (root.current as SVGSVGElement)?.querySelectorAll('[data-follow-stroke]').forEach((item) => {
        item.setAttribute('stroke', item.getAttribute('data-follow-stroke') || '');
      });
    }
  }, [stroke, color, fill]);
  return (
    <span role='img' className='svg-icon'>
      <svg
        ref={root}
        width={_width}
        height={_height}
        viewBox='0 0 48 48'
        preserveAspectRatio='xMidYMid meet'
        // stroke={"#333"}
        // fill="#fff"
        // role="presentation"
        xmlns='http://www.w3.org/2000/svg'
        {...rest}
      >
        {svg}
      </svg>
    </span>
  );
}
