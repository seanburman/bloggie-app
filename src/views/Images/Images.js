import PexelsSearch from "../../components/Pexels/PexelsSearch"
import SavedImages from "../../components/SavedImages/SavedImages"
import Tabs from "../../components/Tabs/Tabs"
import FileUpload from "../../firebase/FileUpload"

export default function Images() {
    const TabItems = [
        {
            tab: "My Images",
            item: <SavedImages/>
        },
        {
            tab: "Upload",
            item: <FileUpload />
        },
        {
            tab: "Pexels Images",
            item: <PexelsSearch />
        }  
    ]
    

    return (
        <div className="flex-col slide-in">
        <h1 className="space-v-b-md">Image Library</h1>
         <Tabs tabs={TabItems} />
        </div>
    )
}