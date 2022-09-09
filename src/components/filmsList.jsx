import  {Component} from "react";

class FilmsList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            list: [],
            isLoading: true,
        };
    }

    getFilms() {
        fetch()
        .then((res) => res.json())
        .then((list) => this.setState)
        .then(())
    }   

    componentDidMount() {
        this.getFilms();
    }

        render() {
            if (this.state.isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <ul>
            {this.state.list.map((film) => (
                <li key={film.id}>{film.title}</li>
            ))}
            </ul>
        };
    }

    export default FilmsList;