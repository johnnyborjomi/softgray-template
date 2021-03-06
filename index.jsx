/**
 * Created by nikuz on 9/14/17.
 */
class SubscribtionForm extends React.Component {


    constructor (props){
        super(props);

        const basicEmail = '';

        this.state = {isSubscribed:false, email:basicEmail, isValid:this.emailCheck(basicEmail)};

    }

    subscribe (event){
        event.preventDefault();
        this.setState({isSubscribed : true})
    }

    emailChange(event) {

        this.setState({email: event.target.value, isValid: this.emailCheck(this.state.email)})

    }

    showAlertSpan(){
          if(this.state.email != '') {
              return <span className={this.state.isValid ? 'email-alert green' : 'email-alert red'}>
                  {this.state.isValid ? 'email is valid' : 'email is not valid'}
                  </span>
          }
    }

    emailCheck(email){
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);

    }

    render() {
        if(this.state.isSubscribed){
            return(
            <form>
                <label>Newsletter</label>
                <span className="subscribe-done">Thanks for subscribe!! Check your email!!</span>
            </form>
            )

        }else{
            return(
            <form>
                <label>Newsletter</label>
                <input type="email" onChange={this.emailChange.bind(this)} value={this.state.email}/>
                <button disabled={this.state.isValid ? '' : 'disabled'} onClick={(event) => this.subscribe(event)}>Subscribes</button>
                {this.showAlertSpan()}
            </form>
            )
        }

    }

}


ReactDOM.render(
    <SubscribtionForm />,
    document.querySelector('.subscribe-block')
);