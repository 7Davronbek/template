import { useContext } from 'react';
import PermissionContext from './PermissionContext';

const usePermission = (permission) => {
  const { isAllowedTo } = useContext(PermissionContext);
  return isAllowedTo(permission);
};

export default usePermission;
