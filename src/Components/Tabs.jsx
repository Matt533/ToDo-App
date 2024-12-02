export default function Tabs (props)
{
    const { todos, selectedTab, setSelectedTab} = props

    const tabs = ['All', 'Open', 'Completed']

    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === "All" ?
                todos.length :
                tab === 'Open' ?
                todos.filter(val =>  !val.complete).length
                : 
                todos.filter(val => val.complete).length
                return (
                    <button onClick={() => setSelectedTab(tab)} className={"tab-button " + (tab === selectedTab ? "tab-selected" : "")} key={tabIndex}>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>      
                )
            })}
            <hr/>
        </nav>
    )
}