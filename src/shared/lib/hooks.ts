import {APP_URL} from "@shared/const/constants";
import {useLocation} from "react-router-dom";

export const useIsPage = (page: APP_URL) => {
  const {pathname} = useLocation();
  return page === '/'
    ? pathname === '/'
    : pathname.startsWith(page);
}