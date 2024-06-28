import Product from "../models/Product"
import ProductInstance from "../models/ProductInstances"

type cartItem = {
    id: any,
    quantity: number
}

const calcCartPrice = async(cart: Array<cartItem>,options: "wholesale"| "retail") => {
    const priceArray = cart.map(async(item: cartItem) => {
        const product = await Product.findById(item.id).select('price').exec()
        if(!product){
            throw new Error("product not found")
        }
        if(options === "wholesale") return product.price.wholesale * item.quantity
        else return product.price.retail * item.quantity
    })
    const arrayToReduce = await Promise.all(priceArray)
    return arrayToReduce.reduce((accum,current) => {
        return accum + current
    },0)
}

const saveInstanceToInventory = async(cartItem:cartItem,areaId:string) => {

    const instance = await ProductInstance.findOne({product: cartItem.id, area: areaId}).exec()
    if(!instance){
        //create new instance if area doesnt have instance of item
        await ProductInstance.create({
                product: cartItem.id,
                area: areaId,
                quantity: cartItem.quantity
        })
    }else{
        await ProductInstance.findByIdAndUpdate(instance.id, {quantity: instance.quantity + cartItem.quantity}
        )
    }
}

const removeInstanceFromInventory = async(cartItem:cartItem,areaId:string) => {
    const instance = await ProductInstance.findOne({product: cartItem.id, area: areaId}).exec()
    if(!instance){
        throw new Error("no instance found")
    }
    if(cartItem.quantity === instance.quantity){
        ProductInstance.findByIdAndDelete(cartItem.id).exec()
        return
    }
    const newqty = instance.quantity - cartItem.quantity
    console.log(newqty)

    //not updating for some reason
    const itemtoUpdate = await ProductInstance.findOneAndUpdate({product: cartItem.id}, {quantity: newqty}, {new: true}).exec()
    console.log(itemtoUpdate)
}

const transferItem = async(item:cartItem, areaId:string, area2Id: string ) => {
    try{
        const instance = await ProductInstance.findOne({
            product: item.id,
            area: areaId
        })
        if(!instance) throw new Error("no instance found")
        if(instance.quantity === item.quantity){
            await ProductInstance.findOneAndUpdate({product: item.id, area: areaId}, {area: area2Id}).exec()
            return
        }
        await removeInstanceFromInventory(item, areaId)
        await saveInstanceToInventory(item, area2Id)
    }catch(e){
        console.log(e)
    }
}


export {calcCartPrice, saveInstanceToInventory, removeInstanceFromInventory, transferItem}