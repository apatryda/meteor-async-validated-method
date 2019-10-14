/// <reference path="../typings/index.d.ts" />

import {
  ValidatedMethod as RawValidatedMethod,
  ValidatedMethodApplyOptions,
  ValidatedMethodArgs,
  ValidatedMethodCallback,
  ValidatedMethodMixin,
  ValidatedMethodOptions,
  ValidatedMethodResult,
} from 'meteor/mdg:validated-method';

export class ValidatedMethod<
  Result extends ValidatedMethodResult = undefined,
  Args extends ValidatedMethodArgs = undefined
> extends RawValidatedMethod<Result, Args> {
  constructor(options: ValidatedMethodOptions<Result, Args>) {
    super(options);
  }

  callAsync(args?: Args) {
    return new Promise<Result>((resolve, reject) => {
      const callback: ValidatedMethodCallback<Result> = (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      };

      if (args) {
        this.call(args, callback);
        return;
      }

      this.call(callback);
    });
  }
}

export {
  RawValidatedMethod,
  ValidatedMethodApplyOptions,
  ValidatedMethodArgs,
  ValidatedMethodCallback,
  ValidatedMethodMixin,
  ValidatedMethodOptions,
  ValidatedMethodResult,
}
