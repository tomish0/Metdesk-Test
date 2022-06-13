import {getTimeFormat} from '../utils/getTimeFormat';

interface Props {
  dtgs: string[];
  selectedDtg: number;
  setSelectedDtg: (issueIndex: number) => void;
}

// component to render out all the dtgs as their index in the list
// clicking one of these dtgs will update the state with the selected index

export default function Dtgs(props: Props) {
  const {dtgs, selectedDtg, setSelectedDtg} = props;

  return (
    <div id="dtgs">
      {dtgs.map((dtg, index) => {
        return (
          <div
            key={index}
            className={`dtg ${selectedDtg === index ? 'dtg-selected' : ''}`}
            onClick={() => {
              if (index !== selectedDtg) setSelectedDtg(index);
            }}
            title={getTimeFormat(dtg)}
          >
            {index}
          </div>
        );
      })}
    </div>
  );
}
