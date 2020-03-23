import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import ReactMapGL from "react-map-gl"

export default function IndexPage () {
    return (
    <div>
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        <CountrySelector></CountrySelector>
        <ReactMapGL/>
    </div>
    );
}