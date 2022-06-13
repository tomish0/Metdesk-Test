import {getTimeFormat} from '../utils/getTimeFormat';

interface Props {
  dtg: string;
}

//component to render out the selected dtg

export default function SelectedDtg(props: Props) {
  return <div id="selected-dtg">{getTimeFormat(props.dtg)}</div>;
}
