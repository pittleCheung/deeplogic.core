export { Columns, Field, FlexControl, Panel, Popover, Sides, Template } from './_components';
export { default as Segmented } from './segmented';

// 配置器
import ArraySetter from './array';
import ChartSetter from './charts';
import EventSetter from './event';
import JSONSetter from './json';
import NodeSetter from './node';
import ObjectSetter from './object';
import SeriesSetter from './series';
import StyleSetter from './style';
import ThemeSetter from './theme';

export { EventSetter, JSONSetter, NodeSetter, ObjectSetter, SeriesSetter };

export const setters = {
  StyleSetter,
  EventSetter,
  ArraySetter,
  ChartSetter,
  ThemeSetter,
  ObjectSetter,
  SeriesSetter,
  JSONSetter,
  NodeSetter
};
