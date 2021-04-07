
class Shoppinglist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array_obj:  [{name:"apple", price:"10"},{name:"banana", price:"5"}],
        };
        this.oninput = this.oninput.bind(this);
    }
    render() {
        let arr = this.state.array_obj;
        const a = arr.map((item, index) => {
            return (
                <ul key={index}>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                </ul>
            );
        });

        return(
            <div>
                <input onInput={(event)=>this.oninput(event)}/>
                {a}
            </div>
        );

    }

    getItems(){
        let array_obj = [{name:"apple", price:"10"},{name:"banana", price:"5"}]
        return array_obj
    }

    oninput(event){
        console.log(event.target.value)
        let str = event.target.value
        //let a = this.state.array_obj.slice();
        let a = this.getItems()
        let b = a.filter((item, index, arr)=>{
            return (item.name).indexOf(str)>=0;
        });
        this.setState(
            {
                array_obj: b,
            });
    }
}



ReactDOM.render(
    <Shoppinglist />,
    document.getElementById('root')
);
