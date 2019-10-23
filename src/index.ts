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

const callAsyncFactory = Meteor.bindEnvironment((method: RawValidatedMethod<any, any>, args: ValidatedMethodArgs) =>
  Meteor.bindEnvironment((resolve: (result: ValidatedMethodResult) => void, reject: (error: Error) => void) => {
    const callback: ValidatedMethodCallback<any> = Meteor.bindEnvironment((error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });

    if (args) {
      method.call(args, callback);
      return;
    }

    method.call(callback);
  })
);

export class ValidatedMethod<
  Args extends ValidatedMethodArgs = undefined,
  Result extends ValidatedMethodResult = void,
> extends RawValidatedMethod<Args, Result> {
  callAsync: ValidatedMethodCallAsyncFn<Args, Result> = args => new Promise<any>(callAsyncFactory(this, args));
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
