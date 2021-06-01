import React from 'react'
import { useState } from 'react'

export default function Tabs({tabs}) {
    const [ item, setItem ] = useState(tabs[0].item)

    return (
        <React.Fragment>
        <div className="flex-center">
                {
                    tabs.map((tab, i) => (
                            <button 
                            key={i} 
                            className="button__red button__tabs button__lg space-hz-sm"
                            disabled={item === tab.item}
                            onClick={() => setItem(tab.item)}>
                            {tab.tab}
                            </button>
                    ))
                }

                </div>
            <div className="flex-col space-v-lg">
            {item}
            </div>
            
        </React.Fragment>
                

    )
}