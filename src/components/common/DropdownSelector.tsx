import React, {createContext, PropsWithChildren, useContext, useLayoutEffect, useState} from "react";

interface DropdownSelectorProps {
    className?: string
    onItemSelect: (item: Item) => void
}


interface Item {
    id: number,
    name: string,
}

interface ItemProps extends Item {
    id: number,
    name: string,
    className?: string,
    isInitial?: boolean
}

interface DropdownSelectorState {
    onItemSelect: (item: Item) => void,
    selectedItemId: number | null,
    items: Item[],
    isOpened: boolean
}

interface DropdownSelectorContext extends DropdownSelectorState {
    setState: React.Dispatch<React.SetStateAction<DropdownSelectorState>>
}

const Context = createContext<DropdownSelectorContext | null>(null);

const useDropdownSelectorContext = () => {
    const ctx = useContext(Context)

    if (!ctx) {
        throw new Error("Dropdown-related components must be wrapper by <DropdownSelector>")
    }

    return ctx;
}

const DropdownSelector = ({className, onItemSelect, children}: PropsWithChildren<DropdownSelectorProps>) => {

    const [state, setState] = useState<DropdownSelectorState>({
        onItemSelect,
        selectedItemId: null,
        isOpened: false,
        items: [],
    })

    return <Context.Provider value={{...state, setState}}>
        <div className={className}>
            {children}
        </div>
    </Context.Provider>
}

interface DropdownSelectorDisplayProps {
    className?: string
    placeholder?: string
}

const DropdownSelectorDisplay = ({className, placeholder}: DropdownSelectorDisplayProps) => {
    const {items,isOpened ,selectedItemId, setState} = useDropdownSelectorContext();
    const selectedItem = items.find(item => item.id === selectedItemId)
    const onClickHandler = () => {
        setState(prev=>({...prev, isOpened: !prev.isOpened}))
    }
    return <div onClick={onClickHandler} className={`${isOpened? 'opened' : ''} ${className}`}>{selectedItem?.name ?? placeholder}</div>
}

const DropdownSelectorItem = ({id, name, className, isInitial}: PropsWithChildren<ItemProps>) => {
    const {onItemSelect, setState, selectedItemId, items} = useDropdownSelectorContext();

    useLayoutEffect(() => {
        if(selectedItemId) return;
        setState(prev => {
                const newValue = {...prev};
                newValue.items = [...newValue.items, {id, name}];
                if(isInitial){
                    newValue.selectedItemId = id;
                }
                return newValue;
            }
        )
    }, [])

    const onClickHandler = () => {
        onItemSelect({id, name});
        setState(prev => ({...prev, selectedItemId: id, isOpened:false}))
    }

    return <li className={className} onClick={onClickHandler}>{name}</li>
}

const DropDownSelectorItemList = ({children, className}:PropsWithChildren<{className?:string}>) => {
    const {isOpened} = useDropdownSelectorContext();

    return isOpened ? <ul className={className}>
        {children}
    </ul> : null;
}

DropdownSelector.Item = DropdownSelectorItem;
DropdownSelector.Display = DropdownSelectorDisplay;
DropdownSelector.ItemList = DropDownSelectorItemList;
export default DropdownSelector;