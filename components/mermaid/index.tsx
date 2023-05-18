// import Mermaid
import Mermaid2 from 'mermaid'

const Mermaid: React.FC = () => {
    return (
        <pre className="mermaid">
            {`
                classDiagram
                Class01 o--> AveryLongClass : Cool
                <<Interface>> Class01
                Class09 o--> C2 : Where am I?
                Class09 --* C3
                Class09 --|> Class07
                Class07 : equals()
                Class07 : Object[] elementData
                Class01 : size()
                Class01 : int chimp
                Class01 : int gorilla
                class Class10 {
                    <<service>>
                    int id
                    size()
                }
            `}
        </pre>
    )
}

export default Mermaid
