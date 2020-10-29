// eslint-disable-next-line
class WelcomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errorMessage: '',
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let error = '';
        if (nam === "age") {
            if (val !== "" && !Number(val)) {
                error = 'Your age must be a number';
            }
        }
        this.setState({ errorMessage: error });
        this.setState({ [nam]: val });

    }
    render() {
        return (
            <form>
                <h1> Hello {this.state.username} {this.state.age}</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="input your name"
                    class="form-control"
                    onChange={this.myChangeHandler} />

                <p>Enter your age: </p>
                <input
                    type="text"
                    name="age"
                    placeholder="input your age"
                    class="form-control"
                    onChange={this.myChangeHandler} />
                <br></br>

                <div> <label class="warning-message"> {this.state.errorMessage} </label></div>
            </form>
        )
    }
}