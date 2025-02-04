function Cards({
  title ="-",
  image= "https://dummyimage.com/720x600",
  price= "-",
  onPress,

} )
 {
    return(
        
      <div onClick={onPress} className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {title}
        </h3>

        <p className="mt-1">{price}</p>
      </div>
    </div>
        


    );
}
export default Cards;