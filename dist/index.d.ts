/// <reference path="../typings/index.d.ts" />
import { ValidatedMethod as RawValidatedMethod, ValidatedMethodApplyOptions, ValidatedMethodArgs, ValidatedMethodCallback, ValidatedMethodMixin, ValidatedMethodOptions, ValidatedMethodResult } from 'meteor/mdg:validated-method';
export declare class ValidatedMethod<Result extends ValidatedMethodResult = void, Args extends ValidatedMethodArgs = undefined> extends RawValidatedMethod<Result, Args> {
    callAsync(args?: Args): Promise<Result>;
}
export { RawValidatedMethod, ValidatedMethodApplyOptions, ValidatedMethodArgs, ValidatedMethodCallback, ValidatedMethodMixin, ValidatedMethodOptions, ValidatedMethodResult, };
