/// <reference path="../typings/index.d.ts" />
import { ValidatedMethod as RawValidatedMethod, ValidatedMethodApplyOptions, ValidatedMethodArgs, ValidatedMethodCallback, ValidatedMethodMixin, ValidatedMethodOptions, ValidatedMethodResult } from 'meteor/mdg:validated-method';
export declare type ValidatedMethodCallAsyncFn<Args extends ValidatedMethodArgs = undefined, Result extends ValidatedMethodResult = void> = (this: RawValidatedMethod<Args, Result>, args?: Args) => Promise<Result>;
export declare class ValidatedMethod<Args extends ValidatedMethodArgs = undefined, Result extends ValidatedMethodResult = void> extends RawValidatedMethod<Args, Result> {
    callAsync: ValidatedMethodCallAsyncFn<Args, Result>;
}
export { RawValidatedMethod, ValidatedMethodApplyOptions, ValidatedMethodArgs, ValidatedMethodCallback, ValidatedMethodMixin, ValidatedMethodOptions, ValidatedMethodResult, };
