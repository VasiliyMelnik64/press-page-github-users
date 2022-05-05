import { getUsersError, ActionErrorType } from '../modules/users/users-slice';
import { notifications } from '../services/notifications-service';

export const errorMiddleware =
  () =>
  (next: (action: ActionErrorType) => void) =>
  (action: any): void => {
    const errors = [getUsersError(action).type]; // add new error types here

    if (errors.includes(action.type)) {
      notifications.error(action?.payload?.message);
    }

    next(action);
  };
