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

export type ValidatedMethodCallAsyncFn<
  Args extends ValidatedMethodArgs = undefined,
  Result extends ValidatedMethodResult = void,
> = (this: RawValidatedMethod<Args, Result>, args?: Args) => Promise<Result>;

export type ValidatedMethodCallAsyncFnWrapper<
  Args extends ValidatedMethodArgs = undefined,
  Result extends ValidatedMethodResult = void,
> = (self: RawValidatedMethod<Args, Result>, args?: Args) => Promise<Result>;

const callAsync: ValidatedMethodCallAsyncFnWrapper<any, any> =  Meteor.bindEnvironment((self, args) => {
  return new Promise(Meteor.bindEnvironment((resolve, reject) => {
    const callback: ValidatedMethodCallback<any> = Meteor.bindEnvironment((error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });

    if (args) {
      self.call(args, callback);
      return;
    }

    self.call(callback);
  }));
});

export class ValidatedMethod<
  Args extends ValidatedMethodArgs = undefined,
  Result extends ValidatedMethodResult = void,
> extends RawValidatedMethod<Args, Result> {
  callAsync: ValidatedMethodCallAsyncFn<Args, Result> = args => callAsync(this, args);
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
