import {DISK_URL} from "../../config";
import {core} from "../"

const userApi = {
    getMe: (idUser) => core.http(`${DISK_URL}/getMe`, "POST",{idUser: idUser})
}
export default userApi