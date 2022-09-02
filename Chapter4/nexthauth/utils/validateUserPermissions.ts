type User = {
  permissions: string[];
  roles: string[];
};

type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParams) {
  //valida se tem permissão
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permissions) => {
      return user.permissions.includes(permissions);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  //valida se o tipo de usuário pode acessar
  if (roles?.length > 0) {
    const hasAllRoles = roles.some((role) => {
      return user.roles.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
