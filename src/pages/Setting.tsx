import Typography from '@components/common/Typography';
import React from 'react';
import { settings } from 'src/constants/setting';
import { colors } from 'src/styles/colors';
import styled from 'styled-components';
import BasicLayout from './layout/BasicLayout';

const Setting = () => {
  return (
    <BasicLayout>
      <List>
        {settings.map((setting, index) => (
          <>
            <ListItem key={index}>
              <Typography variant='button2'>{setting}</Typography>
            </ListItem>
            {index === 1 && <Divider />}
          </>
        ))}
      </List>
    </BasicLayout>
  );
};

export default Setting;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${colors.gray[10]};
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`;

const Divider = styled.hr`
  height: 8px;
  background: ${colors.gray[10]};
  margin-left: -16px;
  margin-right: -16px;
`;
