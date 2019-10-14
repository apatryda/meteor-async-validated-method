/// <reference path="../typings/index.d.ts" />
import { ValidatedMethod as RawValidatedMethod, ValidatedMethodApplyOptions, ValidatedMethodArgs, ValidatedMethodCallback, ValidatedMethodMixin, ValidatedMethodOptions, ValidatedMethodResult } from 'meteor/mdg:validated-method';
export declare class ValidatedMethod<Result extends ValidatedMethodResult = undefined, Args extends ValidatedMethodArgs = undefined> extends RawValidatedMethod<Result, Args> {
    constructor(options: ValidatedMethodOptions<Result, Args>);
    callAsync(args?: Args): Promise<Result>;
}
export { RawValidatedMethod, ValidatedMethodApplyOptions, ValidatedMethodArgs, ValidatedMethodCallback, ValidatedMethodMixin, ValidatedMethodOptions, ValidatedMethodResult, };
