import React from 'react';
import styled from 'styled-components';
import { IoPlayOutline, IoStopOutline, IoTerminal } from 'react-icons/io5';
import { ScriptAction } from './ScriptAction';
import { StandardContainer } from '../../components/common/styled-generic';

interface props {
  selectedPageType: string;
  packaheJsonJson: any;
}

export const ScriptsTab: React.FC<props> = ({ selectedPageType, packaheJsonJson }) => {
  if (!packaheJsonJson || !packaheJsonJson['scripts']) {
    return null;
  }
  const theKeys = Object.keys(packaheJsonJson['scripts']);

  return (
    <Container style={{ display: selectedPageType === 'scripts' ? 'initial' : 'none' }}>
      <StandardContainer>
        <h1>Scripts</h1>

        {theKeys.map((highLevelKey) => (
          <ScriptContainer key={highLevelKey}>
            <ScriptRow>
              <TwoToneLabel>Name: </TwoToneLabel> <LabelBody>{highLevelKey}</LabelBody>
            </ScriptRow>
            <ScriptRow>
              <TwoToneLabel>Command: </TwoToneLabel>
              <ScriptBody>{packaheJsonJson['scripts'][highLevelKey]}</ScriptBody>
            </ScriptRow>
            <ScriptRow border={false}>
              <TwoToneLabel>
                <div>Actions: </div>
              </TwoToneLabel>
              <ActionsBody>
                <ScriptAction type="run" script={highLevelKey} />
                <ScriptAction type="favorite" script={highLevelKey} />
              </ActionsBody>
            </ScriptRow>
          </ScriptContainer>
        ))}
      </StandardContainer>
    </Container>
  );
};

// const ActionButton = styled.div``;

const Container = styled.div``;

const ScriptContainer = styled.div`
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
`;
const ScriptBody = styled.p`
  margin: 0;
  padding: 3px;
  padding-left: 10px;
`;

const TwoToneLabel = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  background-color: lightblue;
  min-width: 6em;
  width: 6em;
`;
const ScriptRow = styled.div<{ border?: boolean }>`
  display: flex;
  flex-direction: row;
  border-bottom: ${({ border }) => (border === false ? 'none' : `1px solid darkblue`)};
`;

// const ScriptLabel = styled(TwoToneLabel)``;
const LabelBody = styled.div`
  padding: 3px;
  padding-left: 10px;
`;

const ActionsBody = styled.div`
  padding: 3px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
