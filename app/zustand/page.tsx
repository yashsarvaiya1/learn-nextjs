import AsyncTodo from "@/components/zustand/AsyncTodo";
import BasicStore from "@/components/zustand/BasicStore";
import MultipleStores from "@/components/zustand/MultipleStores";
import ShoppingStore from "@/components/zustand/ShoppingStore";

export default function ZustandPage(){
    return(
        <>
            <ShoppingStore/>
        </>
    )
}
