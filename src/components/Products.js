import React,{useState} from 'react'

const Product=(props)=>{
  const [quantity,setquantity]=useState(0);
  let cnt=0;
  const buy=()=>{
    setquantity(quantity+1);
    cnt=cnt+1;
    //alert(cnt)
    props.oncalculate(props.price);
  }
  return(
    <>
      <h1 style={{color:'red'}}>{props.name}</h1>
      <p style={{color:'blue'}}>${props.price}</p>
      <button className="button" onClick={buy}>Buy</button>
      <button className="button"onClick={()=>props.onshowproduct(props.name)}>Show</button>
      <h3 style={{color:'yellowgreen'}}>Quantity: {quantity}</h3>
      <hr className="horizontal"/>
    </>
  )
}

const Total=({totalcash})=>{
  return(
    <h3>Total Cash: {totalcash}</h3>
  )
}

const Productform=({index,onaddproduct})=>{

  const [name,setname]=useState("");
  const [price,setprice]=useState("");

  const createProduct=(event)=>{
    event.preventDefault();
    //alert("Name: "+ name+" - "+"Price: "+price)
    const p={id:index,name,price}
    onaddproduct(p);

    setname("");
    setprice("");
  }
  return(
    <>
      <h3 className="h3">Add Product:-</h3>
      <form>
      <label className="label">Product Name: </label>
      <input className="input" type="text"
      value={name}
      onChange={(e)=>setname(e.target.value)}
       />
      <br/><br/>
      <label className="label" >Product Price: </label>
      <input className="input" type="number" 
      value={price}
      onChange={(e)=>setprice(e.target.value)}
      />
      <br/><br/>
      <button className="button" onClick={createProduct}>Create</button>
      <hr className="horizontal"/>
      </form>
    </>
  )
}

const ProductList=()=>{
  const showProduct=(name)=>{
    alert("You selected "+name)
  }
  const [total,settotal]=useState(0);

  const Calculatetotal=(price)=>{
    settotal(total+parseInt(price))
  }



  const [products,setproducts]=useState([
    {id:1,name:"Android",price:200},
    {id:1,name:"Apple",price:250},
    {id:1,name:"Nokia",price:100}
  ])

  const addproduct=(p)=>{
    // arr=[1,2,3]
    // setarr([...arr,4])=> arr=[1,2,3,4]
    // setarr([...arr,5])=> arr=[1,2,3,4,5]

    setproducts([...products,p])
    alert("created succesfully")
  }

  return(
    <>
    <Productform index={products.length+1}onaddproduct={addproduct}/>
    {products.map((p)=>(
      <Product 
      key={p.id}
      name={p.name}
      price={p.price} 
      oncalculate={Calculatetotal}
      onshowproduct={showProduct}
    />
    ))}
    <Total totalcash={total}/>
    </>
  )
}

export default ProductList
