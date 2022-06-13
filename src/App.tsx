import React, {useCallback, useEffect, useState} from 'react';
import Dtgs from './components/Dtgs';
import Issues from './components/Issues';
import SelectedDtg from './components/SelectedDtg';
import {getData} from './utils/getData';

// Head of the component hierachy
// Here we have 4 state variables that the application depends upon
// issues - list of issues = Forecast DTG grouping
// selectedIssue - currently selected issue
// dtgs - list of Forecast DTGs
// selectedDtg - currently selected Forecast DTG

export default function App() {
  const [issues, setIssues] = useState<string[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<number>(0);
  const [dtgs, setDtgs] = useState<string[]>([]);
  const [selectedDtg, setSelectedDtg] = useState<number>(0);

  // using useCallback to memorize the function so the useEffect can take the function as a dependency
  // ping the server to get the issues, reverse the order & add to state
  // also get the dtgs with the first issue
  const getIssues = useCallback(async () => {
    const newIssues: string[] = await getData('issues?model=ecop');

    setIssues(newIssues.reverse());

    if (newIssues.length > 0) getDtgs(newIssues[0]);
  }, []);

  // get the issues on load of the application
  useEffect(() => {
    getIssues();
  }, [getIssues]);

  // ping the server to get the dtgs & add to state
  const getDtgs = async (issue: string) => {
    const dtgs: string[] = await getData(
      `dtgs?model=ecop&element=combined&interval=model&issue=${issue}`
    );

    setDtgs(dtgs);
  };

  // select an issue to display its associated dtgs
  const selectIssue = (issueIndex: number) => {
    getDtgs(issues[issueIndex]);
    setSelectedIssue(issueIndex);
    setSelectedDtg(0);
  };

  return (
    <div id="app">
      <Issues issues={issues} selectedIssue={selectedIssue} selectIssue={selectIssue} />
      <Dtgs dtgs={dtgs} selectedDtg={selectedDtg} setSelectedDtg={setSelectedDtg} />
      <SelectedDtg dtg={dtgs[selectedDtg]} />
    </div>
  );
}
