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
import { Meteor } from 'meteor/meteor';

export class ValidatedMethod<
  Result extends ValidatedMethodResult = void,
  Args extends ValidatedMethodArgs = undefined
> extends RawValidatedMethod<Result, Args> {
  callAsync(args?: Args) {
    return new Promise<Result>((resolve, reject) => {
      const callback: ValidatedMethodCallback<Result> = Meteor.bindEnvironment((error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      });

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
