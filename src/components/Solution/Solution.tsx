import { Collapse } from 'antd';
import { ReactNode } from 'react';
import { ChavronIcon } from '../../assets/icons';

const { Panel } = Collapse;

export const Solution = ({ children }:{children:ReactNode}) => (
  <Collapse
    style={{ marginBottom: 14 }}
    expandIcon={({ isActive }) => <ChavronIcon style={{
      transition: 'all 300ms',
      rotate: `${isActive ? 90 : 0}deg`,
    }} />}
  >
    <Panel header="Решение" key="1">
        {children}
    </Panel>
  </Collapse>
)



