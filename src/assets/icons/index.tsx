import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';
import { ReactComponent as ArrowSvg } from './arrow.svg';
import { ReactComponent as InfoSvg } from './info.svg';
import { ReactComponent as WarningSvg } from './warning.svg';
import { ReactComponent as ClipboardSvg } from './clipboard.svg';
import { ReactComponent as CloseSvg } from './close.svg';
import { ReactComponent as BurgerSvg } from './burger.svg';
import { ReactComponent as HatSvg } from './hat.svg';
import { ReactComponent as TasksSvg } from './tasks.svg';
import { ReactComponent as ChavronSvg } from './chevron.svg';
import { ReactComponent as StarSvg } from './star.svg';
import { ReactComponent as PlaySvg } from './play.svg';
import { ReactComponent as LoadingSvg } from './loading.svg';

export const InfoIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={InfoSvg} {...props} style={{ color: "#1677ff", fontSize: 14 }}/>
);

export const ArrowIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowSvg} {...props}/>
);

export const WarningIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WarningSvg} {...props} style={{ color: "#fadb14", fontSize: 14, marginRight: '8px' }}/>
);

export const ClipboardIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ClipboardSvg} {...props}/>
);

export const CloseIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={CloseSvg} {...props}/>
);

export const BurgerIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={BurgerSvg} {...props}/>
);

export const HatIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HatSvg} {...props}/>
);

export const TasksIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={TasksSvg} {...props} style={{ color: "#1677ff"}}/>
);

export const ChavronIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ChavronSvg} {...props}/>
);

export const StarIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={StarSvg} {...props}/>
);

export const PlayIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PlaySvg} {...props} />
);

export const LoadingIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LoadingSvg} {...props} />
);