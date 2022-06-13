import {getTimeFormat} from '../utils/getTimeFormat';

interface Props {
  issues: string[];
  selectedIssue: number;
  selectIssue: (issueIndex: number) => void;
}

// component to render out the issues in a drop down list

export default function Issues(props: Props) {
  const {issues, selectedIssue, selectIssue} = props;

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = +e.target.value;
    if (index !== selectedIssue) selectIssue(index);
  };

  return (
    <select id="issues" onChange={onChange}>
      {issues.map((issue, index) => {
        return (
          <option
            key={index}
            className={selectedIssue === index ? 'selected-issue' : ''}
            value={index}
          >
            {getTimeFormat(issue)}
          </option>
        );
      })}
    </select>
  );
}
