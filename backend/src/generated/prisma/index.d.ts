
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model MembershipPlan
 * 
 */
export type MembershipPlan = $Result.DefaultSelection<Prisma.$MembershipPlanPayload>
/**
 * Model Membership
 * 
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model MemberPayment
 * 
 */
export type MemberPayment = $Result.DefaultSelection<Prisma.$MemberPaymentPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model StaffAttendance
 * 
 */
export type StaffAttendance = $Result.DefaultSelection<Prisma.$StaffAttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const BusinessType: {
  GYM: 'GYM',
  YOGA_STUDIO: 'YOGA_STUDIO',
  DANCE_STUDIO: 'DANCE_STUDIO',
  PILATES_STUDIO: 'PILATES_STUDIO',
  SWIMMING_ACADEMY: 'SWIMMING_ACADEMY',
  SPORTS_CENTER: 'SPORTS_CENTER',
  MIXED_MARTIAL_ARTS_ACADEMY: 'MIXED_MARTIAL_ARTS_ACADEMY',
  BADMINTON_ACADEMY: 'BADMINTON_ACADEMY',
  PICKLEBALL_CLUB: 'PICKLEBALL_CLUB',
  ZUMBA_STUDIO: 'ZUMBA_STUDIO',
  OTHER: 'OTHER'
};

export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType]


export const PlanStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]


export const BillingInterval: {
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type BillingInterval = (typeof BillingInterval)[keyof typeof BillingInterval]


export const SubscriptionStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  SUSPENDED: 'SUSPENDED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  ONLINE: 'ONLINE',
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  UPI: 'UPI',
  CARD: 'CARD'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const MemberStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const MembershipStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  SUSPENDED: 'SUSPENDED'
};

export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus]


export const StaffType: {
  TRAINER: 'TRAINER',
  RECEPTIONIST: 'RECEPTIONIST',
  CLEANER: 'CLEANER',
  MANAGER: 'MANAGER',
  ACCOUNTANT: 'ACCOUNTANT',
  SECURITY: 'SECURITY',
  OTHER: 'OTHER'
};

export type StaffType = (typeof StaffType)[keyof typeof StaffType]


export const StaffStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type StaffStatus = (typeof StaffStatus)[keyof typeof StaffStatus]


export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  HALF_DAY: 'HALF_DAY',
  LATE: 'LATE',
  LEAVE: 'LEAVE'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type BusinessType = $Enums.BusinessType

export const BusinessType: typeof $Enums.BusinessType

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

export type BillingInterval = $Enums.BillingInterval

export const BillingInterval: typeof $Enums.BillingInterval

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type MemberStatus = $Enums.MemberStatus

export const MemberStatus: typeof $Enums.MemberStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type MembershipStatus = $Enums.MembershipStatus

export const MembershipStatus: typeof $Enums.MembershipStatus

export type StaffType = $Enums.StaffType

export const StaffType: typeof $Enums.StaffType

export type StaffStatus = $Enums.StaffStatus

export const StaffStatus: typeof $Enums.StaffStatus

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membershipPlan`: Exposes CRUD operations for the **MembershipPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembershipPlans
    * const membershipPlans = await prisma.membershipPlan.findMany()
    * ```
    */
  get membershipPlan(): Prisma.MembershipPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.membership.findMany()
    * ```
    */
  get membership(): Prisma.MembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberPayment`: Exposes CRUD operations for the **MemberPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberPayments
    * const memberPayments = await prisma.memberPayment.findMany()
    * ```
    */
  get memberPayment(): Prisma.MemberPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffAttendance`: Exposes CRUD operations for the **StaffAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffAttendances
    * const staffAttendances = await prisma.staffAttendance.findMany()
    * ```
    */
  get staffAttendance(): Prisma.StaffAttendanceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Business: 'Business',
    Plan: 'Plan',
    Subscription: 'Subscription',
    Payment: 'Payment',
    Member: 'Member',
    MembershipPlan: 'MembershipPlan',
    Membership: 'Membership',
    MemberPayment: 'MemberPayment',
    Staff: 'Staff',
    StaffAttendance: 'StaffAttendance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "business" | "plan" | "subscription" | "payment" | "member" | "membershipPlan" | "membership" | "memberPayment" | "staff" | "staffAttendance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      MembershipPlan: {
        payload: Prisma.$MembershipPlanPayload<ExtArgs>
        fields: Prisma.MembershipPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          findFirst: {
            args: Prisma.MembershipPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          findMany: {
            args: Prisma.MembershipPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>[]
          }
          create: {
            args: Prisma.MembershipPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          createMany: {
            args: Prisma.MembershipPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MembershipPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          update: {
            args: Prisma.MembershipPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          deleteMany: {
            args: Prisma.MembershipPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MembershipPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPlanPayload>
          }
          aggregate: {
            args: Prisma.MembershipPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembershipPlan>
          }
          groupBy: {
            args: Prisma.MembershipPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipPlanCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipPlanCountAggregateOutputType> | number
          }
        }
      }
      Membership: {
        payload: Prisma.$MembershipPayload<ExtArgs>
        fields: Prisma.MembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findFirst: {
            args: Prisma.MembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findMany: {
            args: Prisma.MembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          create: {
            args: Prisma.MembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          createMany: {
            args: Prisma.MembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          update: {
            args: Prisma.MembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          deleteMany: {
            args: Prisma.MembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembership>
          }
          groupBy: {
            args: Prisma.MembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number
          }
        }
      }
      MemberPayment: {
        payload: Prisma.$MemberPaymentPayload<ExtArgs>
        fields: Prisma.MemberPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentPayload>
          }
          findFirst: {
            args: Prisma.MemberPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentPayload>
          }
          findMany: {
            args: Prisma.MemberPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentPayload>[]
          }
          create: {
            args: Prisma.MemberPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentPayload>
          }
          createMany: {
            args: Prisma.MemberPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentPayload>
          }
          update: {
            args: Prisma.MemberPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentPayload>
          }
          deleteMany: {
            args: Prisma.MemberPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPaymentPayload>
          }
          aggregate: {
            args: Prisma.MemberPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberPayment>
          }
          groupBy: {
            args: Prisma.MemberPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<MemberPaymentCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      StaffAttendance: {
        payload: Prisma.$StaffAttendancePayload<ExtArgs>
        fields: Prisma.StaffAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAttendancePayload>
          }
          findFirst: {
            args: Prisma.StaffAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAttendancePayload>
          }
          findMany: {
            args: Prisma.StaffAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAttendancePayload>[]
          }
          create: {
            args: Prisma.StaffAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAttendancePayload>
          }
          createMany: {
            args: Prisma.StaffAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StaffAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAttendancePayload>
          }
          update: {
            args: Prisma.StaffAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAttendancePayload>
          }
          deleteMany: {
            args: Prisma.StaffAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAttendancePayload>
          }
          aggregate: {
            args: Prisma.StaffAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffAttendance>
          }
          groupBy: {
            args: Prisma.StaffAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<StaffAttendanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    business?: BusinessOmit
    plan?: PlanOmit
    subscription?: SubscriptionOmit
    payment?: PaymentOmit
    member?: MemberOmit
    membershipPlan?: MembershipPlanOmit
    membership?: MembershipOmit
    memberPayment?: MemberPaymentOmit
    staff?: StaffOmit
    staffAttendance?: StaffAttendanceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    children: number
    subscriptions: number
    payments: number
    members: number
    staff: number
    staffAttendances: number
    membershipPlans: number
    memberPayments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | UserCountOutputTypeCountChildrenArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    members?: boolean | UserCountOutputTypeCountMembersArgs
    staff?: boolean | UserCountOutputTypeCountStaffArgs
    staffAttendances?: boolean | UserCountOutputTypeCountStaffAttendancesArgs
    membershipPlans?: boolean | UserCountOutputTypeCountMembershipPlansArgs
    memberPayments?: boolean | UserCountOutputTypeCountMemberPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemberPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberPaymentWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    subscriptions: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | PlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payments: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    memberships: number
    payments: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | MemberCountOutputTypeCountMembershipsArgs
    payments?: boolean | MemberCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberPaymentWhereInput
  }


  /**
   * Count Type MembershipPlanCountOutputType
   */

  export type MembershipPlanCountOutputType = {
    memberships: number
  }

  export type MembershipPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | MembershipPlanCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * MembershipPlanCountOutputType without action
   */
  export type MembershipPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlanCountOutputType
     */
    select?: MembershipPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembershipPlanCountOutputType without action
   */
  export type MembershipPlanCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }


  /**
   * Count Type MembershipCountOutputType
   */

  export type MembershipCountOutputType = {
    payments: number
  }

  export type MembershipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | MembershipCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * MembershipCountOutputType without action
   */
  export type MembershipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCountOutputType
     */
    select?: MembershipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembershipCountOutputType without action
   */
  export type MembershipCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberPaymentWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    attendances: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | StaffCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    encryptedPassword: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    parentId: string | null
    isFirstLogin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    encryptedPassword: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    parentId: string | null
    isFirstLogin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    passwordHash: number
    encryptedPassword: number
    role: number
    status: number
    parentId: number
    isFirstLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    passwordHash?: true
    encryptedPassword?: true
    role?: true
    status?: true
    parentId?: true
    isFirstLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    passwordHash?: true
    encryptedPassword?: true
    role?: true
    status?: true
    parentId?: true
    isFirstLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    passwordHash?: true
    encryptedPassword?: true
    role?: true
    status?: true
    parentId?: true
    isFirstLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    email: string | null
    passwordHash: string
    encryptedPassword: string | null
    role: $Enums.Role
    status: $Enums.UserStatus
    parentId: string | null
    isFirstLogin: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    encryptedPassword?: boolean
    role?: boolean
    status?: boolean
    parentId?: boolean
    isFirstLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    business?: boolean | User$businessArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    members?: boolean | User$membersArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    staffAttendances?: boolean | User$staffAttendancesArgs<ExtArgs>
    membershipPlans?: boolean | User$membershipPlansArgs<ExtArgs>
    memberPayments?: boolean | User$memberPaymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    encryptedPassword?: boolean
    role?: boolean
    status?: boolean
    parentId?: boolean
    isFirstLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "passwordHash" | "encryptedPassword" | "role" | "status" | "parentId" | "isFirstLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    business?: boolean | User$businessArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    members?: boolean | User$membersArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    staffAttendances?: boolean | User$staffAttendancesArgs<ExtArgs>
    membershipPlans?: boolean | User$membershipPlansArgs<ExtArgs>
    memberPayments?: boolean | User$memberPaymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      parent: Prisma.$UserPayload<ExtArgs> | null
      children: Prisma.$UserPayload<ExtArgs>[]
      business: Prisma.$BusinessPayload<ExtArgs> | null
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      members: Prisma.$MemberPayload<ExtArgs>[]
      staff: Prisma.$StaffPayload<ExtArgs>[]
      staffAttendances: Prisma.$StaffAttendancePayload<ExtArgs>[]
      membershipPlans: Prisma.$MembershipPlanPayload<ExtArgs>[]
      memberPayments: Prisma.$MemberPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string | null
      passwordHash: string
      encryptedPassword: string | null
      role: $Enums.Role
      status: $Enums.UserStatus
      parentId: string | null
      isFirstLogin: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends User$parentArgs<ExtArgs> = {}>(args?: Subset<T, User$parentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends User$childrenArgs<ExtArgs> = {}>(args?: Subset<T, User$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    business<T extends User$businessArgs<ExtArgs> = {}>(args?: Subset<T, User$businessArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends User$membersArgs<ExtArgs> = {}>(args?: Subset<T, User$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends User$staffArgs<ExtArgs> = {}>(args?: Subset<T, User$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffAttendances<T extends User$staffAttendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$staffAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    membershipPlans<T extends User$membershipPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberPayments<T extends User$memberPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$memberPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly encryptedPassword: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly parentId: FieldRef<"User", 'String'>
    readonly isFirstLogin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.parent
   */
  export type User$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.children
   */
  export type User$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.business
   */
  export type User$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.members
   */
  export type User$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * User.staff
   */
  export type User$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * User.staffAttendances
   */
  export type User$staffAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    where?: StaffAttendanceWhereInput
    orderBy?: StaffAttendanceOrderByWithRelationInput | StaffAttendanceOrderByWithRelationInput[]
    cursor?: StaffAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffAttendanceScalarFieldEnum | StaffAttendanceScalarFieldEnum[]
  }

  /**
   * User.membershipPlans
   */
  export type User$membershipPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    where?: MembershipPlanWhereInput
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    cursor?: MembershipPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipPlanScalarFieldEnum | MembershipPlanScalarFieldEnum[]
  }

  /**
   * User.memberPayments
   */
  export type User$memberPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    where?: MemberPaymentWhereInput
    orderBy?: MemberPaymentOrderByWithRelationInput | MemberPaymentOrderByWithRelationInput[]
    cursor?: MemberPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberPaymentScalarFieldEnum | MemberPaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    businessType: $Enums.BusinessType | null
    mobileNumber: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    businessType: $Enums.BusinessType | null
    mobileNumber: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    userId: number
    businessName: number
    businessType: number
    mobileNumber: number
    email: number
    address: number
    city: number
    state: number
    pincode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessMinAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    businessType?: true
    mobileNumber?: true
    email?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    businessType?: true
    mobileNumber?: true
    email?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    businessType?: true
    mobileNumber?: true
    email?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: string
    userId: string
    businessName: string
    businessType: $Enums.BusinessType
    mobileNumber: string
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    createdAt: Date
    updatedAt: Date
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    businessType?: boolean
    mobileNumber?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>



  export type BusinessSelectScalar = {
    id?: boolean
    userId?: boolean
    businessName?: boolean
    businessType?: boolean
    mobileNumber?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "businessName" | "businessType" | "mobileNumber" | "email" | "address" | "city" | "state" | "pincode" | "createdAt" | "updatedAt", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      businessName: string
      businessType: $Enums.BusinessType
      mobileNumber: string
      email: string | null
      address: string | null
      city: string | null
      state: string | null
      pincode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'String'>
    readonly userId: FieldRef<"Business", 'String'>
    readonly businessName: FieldRef<"Business", 'String'>
    readonly businessType: FieldRef<"Business", 'BusinessType'>
    readonly mobileNumber: FieldRef<"Business", 'String'>
    readonly email: FieldRef<"Business", 'String'>
    readonly address: FieldRef<"Business", 'String'>
    readonly city: FieldRef<"Business", 'String'>
    readonly state: FieldRef<"Business", 'String'>
    readonly pincode: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    price: Decimal | null
    durationInDays: number | null
    maxMembers: number | null
    maxStaff: number | null
    maxBusinesses: number | null
  }

  export type PlanSumAggregateOutputType = {
    price: Decimal | null
    durationInDays: number | null
    maxMembers: number | null
    maxStaff: number | null
    maxBusinesses: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    billingInterval: $Enums.BillingInterval | null
    durationInDays: number | null
    maxMembers: number | null
    maxStaff: number | null
    maxBusinesses: number | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    billingInterval: $Enums.BillingInterval | null
    durationInDays: number | null
    maxMembers: number | null
    maxStaff: number | null
    maxBusinesses: number | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    billingInterval: number
    durationInDays: number
    maxMembers: number
    maxStaff: number
    maxBusinesses: number
    features: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    price?: true
    durationInDays?: true
    maxMembers?: true
    maxStaff?: true
    maxBusinesses?: true
  }

  export type PlanSumAggregateInputType = {
    price?: true
    durationInDays?: true
    maxMembers?: true
    maxStaff?: true
    maxBusinesses?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    billingInterval?: true
    durationInDays?: true
    maxMembers?: true
    maxStaff?: true
    maxBusinesses?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    billingInterval?: true
    durationInDays?: true
    maxMembers?: true
    maxStaff?: true
    maxBusinesses?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    billingInterval?: true
    durationInDays?: true
    maxMembers?: true
    maxStaff?: true
    maxBusinesses?: true
    features?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: Decimal
    billingInterval: $Enums.BillingInterval
    durationInDays: number
    maxMembers: number | null
    maxStaff: number | null
    maxBusinesses: number | null
    features: JsonValue | null
    status: $Enums.PlanStatus
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingInterval?: boolean
    durationInDays?: boolean
    maxMembers?: boolean
    maxStaff?: boolean
    maxBusinesses?: boolean
    features?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>



  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    billingInterval?: boolean
    durationInDays?: boolean
    maxMembers?: boolean
    maxStaff?: boolean
    maxBusinesses?: boolean
    features?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "billingInterval" | "durationInDays" | "maxMembers" | "maxStaff" | "maxBusinesses" | "features" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: Prisma.Decimal
      billingInterval: $Enums.BillingInterval
      durationInDays: number
      maxMembers: number | null
      maxStaff: number | null
      maxBusinesses: number | null
      features: Prisma.JsonValue | null
      status: $Enums.PlanStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Plan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Decimal'>
    readonly billingInterval: FieldRef<"Plan", 'BillingInterval'>
    readonly durationInDays: FieldRef<"Plan", 'Int'>
    readonly maxMembers: FieldRef<"Plan", 'Int'>
    readonly maxStaff: FieldRef<"Plan", 'Int'>
    readonly maxBusinesses: FieldRef<"Plan", 'Int'>
    readonly features: FieldRef<"Plan", 'Json'>
    readonly status: FieldRef<"Plan", 'PlanStatus'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.subscriptions
   */
  export type Plan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    paymentRequired: boolean | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.SubscriptionStatus | null
    autoRenew: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    paymentRequired: boolean | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.SubscriptionStatus | null
    autoRenew: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    paymentRequired: number
    startDate: number
    endDate: number
    status: number
    autoRenew: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    paymentRequired?: true
    startDate?: true
    endDate?: true
    status?: true
    autoRenew?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    paymentRequired?: true
    startDate?: true
    endDate?: true
    status?: true
    autoRenew?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    paymentRequired?: true
    startDate?: true
    endDate?: true
    status?: true
    autoRenew?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    planId: string
    paymentRequired: boolean
    startDate: Date | null
    endDate: Date | null
    status: $Enums.SubscriptionStatus
    autoRenew: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    paymentRequired?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    autoRenew?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>



  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    paymentRequired?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    autoRenew?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "paymentRequired" | "startDate" | "endDate" | "status" | "autoRenew" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string
      paymentRequired: boolean
      startDate: Date | null
      endDate: Date | null
      status: $Enums.SubscriptionStatus
      autoRenew: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Subscription$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly paymentRequired: FieldRef<"Subscription", 'Boolean'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly autoRenew: FieldRef<"Subscription", 'Boolean'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.payments
   */
  export type Subscription$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: string | null
    amount: Decimal | null
    currency: string | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    gatewaySignature: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: string | null
    amount: Decimal | null
    currency: string | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    gatewaySignature: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    subscriptionId: number
    amount: number
    currency: number
    paymentMethod: number
    status: number
    transactionId: number
    gatewayOrderId: number
    gatewayPaymentId: number
    gatewaySignature: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    gatewaySignature?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    gatewaySignature?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    gatewaySignature?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    subscriptionId: string
    amount: Decimal
    currency: string
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus
    transactionId: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    gatewaySignature: string | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    gatewaySignature?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    gatewaySignature?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subscriptionId" | "amount" | "currency" | "paymentMethod" | "status" | "transactionId" | "gatewayOrderId" | "gatewayPaymentId" | "gatewaySignature" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subscriptionId: string
      amount: Prisma.Decimal
      currency: string
      paymentMethod: $Enums.PaymentMethod | null
      status: $Enums.PaymentStatus
      transactionId: string | null
      gatewayOrderId: string | null
      gatewayPaymentId: string | null
      gatewaySignature: string | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly subscriptionId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly gatewayOrderId: FieldRef<"Payment", 'String'>
    readonly gatewayPaymentId: FieldRef<"Payment", 'String'>
    readonly gatewaySignature: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    name: string | null
    mobileNumber: string | null
    email: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    status: $Enums.MemberStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    name: string | null
    mobileNumber: string | null
    email: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    status: $Enums.MemberStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    adminId: number
    name: number
    mobileNumber: number
    email: number
    gender: number
    dateOfBirth: number
    address: number
    city: number
    state: number
    pincode: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    mobileNumber?: true
    email?: true
    gender?: true
    dateOfBirth?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    mobileNumber?: true
    email?: true
    gender?: true
    dateOfBirth?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    mobileNumber?: true
    email?: true
    gender?: true
    dateOfBirth?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    adminId: string
    name: string
    mobileNumber: string
    email: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    status: $Enums.MemberStatus
    createdAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    name?: boolean
    mobileNumber?: boolean
    email?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Member$membershipsArgs<ExtArgs>
    payments?: boolean | Member$paymentsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    id?: boolean
    adminId?: boolean
    name?: boolean
    mobileNumber?: boolean
    email?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "name" | "mobileNumber" | "email" | "gender" | "dateOfBirth" | "address" | "city" | "state" | "pincode" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Member$membershipsArgs<ExtArgs>
    payments?: boolean | Member$paymentsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      payments: Prisma.$MemberPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      name: string
      mobileNumber: string
      email: string | null
      gender: $Enums.Gender | null
      dateOfBirth: Date | null
      address: string | null
      city: string | null
      state: string | null
      pincode: string | null
      status: $Enums.MemberStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memberships<T extends Member$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Member$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Member$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Member$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly adminId: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly mobileNumber: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly gender: FieldRef<"Member", 'Gender'>
    readonly dateOfBirth: FieldRef<"Member", 'DateTime'>
    readonly address: FieldRef<"Member", 'String'>
    readonly city: FieldRef<"Member", 'String'>
    readonly state: FieldRef<"Member", 'String'>
    readonly pincode: FieldRef<"Member", 'String'>
    readonly status: FieldRef<"Member", 'MemberStatus'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.memberships
   */
  export type Member$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Member.payments
   */
  export type Member$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    where?: MemberPaymentWhereInput
    orderBy?: MemberPaymentOrderByWithRelationInput | MemberPaymentOrderByWithRelationInput[]
    cursor?: MemberPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberPaymentScalarFieldEnum | MemberPaymentScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model MembershipPlan
   */

  export type AggregateMembershipPlan = {
    _count: MembershipPlanCountAggregateOutputType | null
    _avg: MembershipPlanAvgAggregateOutputType | null
    _sum: MembershipPlanSumAggregateOutputType | null
    _min: MembershipPlanMinAggregateOutputType | null
    _max: MembershipPlanMaxAggregateOutputType | null
  }

  export type MembershipPlanAvgAggregateOutputType = {
    price: Decimal | null
    durationInDays: number | null
  }

  export type MembershipPlanSumAggregateOutputType = {
    price: Decimal | null
    durationInDays: number | null
  }

  export type MembershipPlanMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    durationInDays: number | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipPlanMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    durationInDays: number | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipPlanCountAggregateOutputType = {
    id: number
    adminId: number
    name: number
    description: number
    price: number
    durationInDays: number
    features: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipPlanAvgAggregateInputType = {
    price?: true
    durationInDays?: true
  }

  export type MembershipPlanSumAggregateInputType = {
    price?: true
    durationInDays?: true
  }

  export type MembershipPlanMinAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    description?: true
    price?: true
    durationInDays?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipPlanMaxAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    description?: true
    price?: true
    durationInDays?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipPlanCountAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    description?: true
    price?: true
    durationInDays?: true
    features?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipPlan to aggregate.
     */
    where?: MembershipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPlans to fetch.
     */
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembershipPlans
    **/
    _count?: true | MembershipPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembershipPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembershipPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipPlanMaxAggregateInputType
  }

  export type GetMembershipPlanAggregateType<T extends MembershipPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateMembershipPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembershipPlan[P]>
      : GetScalarType<T[P], AggregateMembershipPlan[P]>
  }




  export type MembershipPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipPlanWhereInput
    orderBy?: MembershipPlanOrderByWithAggregationInput | MembershipPlanOrderByWithAggregationInput[]
    by: MembershipPlanScalarFieldEnum[] | MembershipPlanScalarFieldEnum
    having?: MembershipPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipPlanCountAggregateInputType | true
    _avg?: MembershipPlanAvgAggregateInputType
    _sum?: MembershipPlanSumAggregateInputType
    _min?: MembershipPlanMinAggregateInputType
    _max?: MembershipPlanMaxAggregateInputType
  }

  export type MembershipPlanGroupByOutputType = {
    id: string
    adminId: string
    name: string
    description: string | null
    price: Decimal
    durationInDays: number
    features: JsonValue | null
    status: $Enums.PlanStatus
    createdAt: Date
    updatedAt: Date
    _count: MembershipPlanCountAggregateOutputType | null
    _avg: MembershipPlanAvgAggregateOutputType | null
    _sum: MembershipPlanSumAggregateOutputType | null
    _min: MembershipPlanMinAggregateOutputType | null
    _max: MembershipPlanMaxAggregateOutputType | null
  }

  type GetMembershipPlanGroupByPayload<T extends MembershipPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipPlanGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipPlanGroupByOutputType[P]>
        }
      >
    >


  export type MembershipPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    durationInDays?: boolean
    features?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | MembershipPlan$membershipsArgs<ExtArgs>
    _count?: boolean | MembershipPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipPlan"]>



  export type MembershipPlanSelectScalar = {
    id?: boolean
    adminId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    durationInDays?: boolean
    features?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "name" | "description" | "price" | "durationInDays" | "features" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["membershipPlan"]>
  export type MembershipPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | MembershipPlan$membershipsArgs<ExtArgs>
    _count?: boolean | MembershipPlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MembershipPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembershipPlan"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      name: string
      description: string | null
      price: Prisma.Decimal
      durationInDays: number
      features: Prisma.JsonValue | null
      status: $Enums.PlanStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membershipPlan"]>
    composites: {}
  }

  type MembershipPlanGetPayload<S extends boolean | null | undefined | MembershipPlanDefaultArgs> = $Result.GetResult<Prisma.$MembershipPlanPayload, S>

  type MembershipPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipPlanCountAggregateInputType | true
    }

  export interface MembershipPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembershipPlan'], meta: { name: 'MembershipPlan' } }
    /**
     * Find zero or one MembershipPlan that matches the filter.
     * @param {MembershipPlanFindUniqueArgs} args - Arguments to find a MembershipPlan
     * @example
     * // Get one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipPlanFindUniqueArgs>(args: SelectSubset<T, MembershipPlanFindUniqueArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembershipPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipPlanFindUniqueOrThrowArgs} args - Arguments to find a MembershipPlan
     * @example
     * // Get one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanFindFirstArgs} args - Arguments to find a MembershipPlan
     * @example
     * // Get one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipPlanFindFirstArgs>(args?: SelectSubset<T, MembershipPlanFindFirstArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanFindFirstOrThrowArgs} args - Arguments to find a MembershipPlan
     * @example
     * // Get one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembershipPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembershipPlans
     * const membershipPlans = await prisma.membershipPlan.findMany()
     * 
     * // Get first 10 MembershipPlans
     * const membershipPlans = await prisma.membershipPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipPlanWithIdOnly = await prisma.membershipPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipPlanFindManyArgs>(args?: SelectSubset<T, MembershipPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembershipPlan.
     * @param {MembershipPlanCreateArgs} args - Arguments to create a MembershipPlan.
     * @example
     * // Create one MembershipPlan
     * const MembershipPlan = await prisma.membershipPlan.create({
     *   data: {
     *     // ... data to create a MembershipPlan
     *   }
     * })
     * 
     */
    create<T extends MembershipPlanCreateArgs>(args: SelectSubset<T, MembershipPlanCreateArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembershipPlans.
     * @param {MembershipPlanCreateManyArgs} args - Arguments to create many MembershipPlans.
     * @example
     * // Create many MembershipPlans
     * const membershipPlan = await prisma.membershipPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipPlanCreateManyArgs>(args?: SelectSubset<T, MembershipPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MembershipPlan.
     * @param {MembershipPlanDeleteArgs} args - Arguments to delete one MembershipPlan.
     * @example
     * // Delete one MembershipPlan
     * const MembershipPlan = await prisma.membershipPlan.delete({
     *   where: {
     *     // ... filter to delete one MembershipPlan
     *   }
     * })
     * 
     */
    delete<T extends MembershipPlanDeleteArgs>(args: SelectSubset<T, MembershipPlanDeleteArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembershipPlan.
     * @param {MembershipPlanUpdateArgs} args - Arguments to update one MembershipPlan.
     * @example
     * // Update one MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipPlanUpdateArgs>(args: SelectSubset<T, MembershipPlanUpdateArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembershipPlans.
     * @param {MembershipPlanDeleteManyArgs} args - Arguments to filter MembershipPlans to delete.
     * @example
     * // Delete a few MembershipPlans
     * const { count } = await prisma.membershipPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipPlanDeleteManyArgs>(args?: SelectSubset<T, MembershipPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembershipPlans
     * const membershipPlan = await prisma.membershipPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipPlanUpdateManyArgs>(args: SelectSubset<T, MembershipPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MembershipPlan.
     * @param {MembershipPlanUpsertArgs} args - Arguments to update or create a MembershipPlan.
     * @example
     * // Update or create a MembershipPlan
     * const membershipPlan = await prisma.membershipPlan.upsert({
     *   create: {
     *     // ... data to create a MembershipPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembershipPlan we want to update
     *   }
     * })
     */
    upsert<T extends MembershipPlanUpsertArgs>(args: SelectSubset<T, MembershipPlanUpsertArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembershipPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanCountArgs} args - Arguments to filter MembershipPlans to count.
     * @example
     * // Count the number of MembershipPlans
     * const count = await prisma.membershipPlan.count({
     *   where: {
     *     // ... the filter for the MembershipPlans we want to count
     *   }
     * })
    **/
    count<T extends MembershipPlanCountArgs>(
      args?: Subset<T, MembershipPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembershipPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipPlanAggregateArgs>(args: Subset<T, MembershipPlanAggregateArgs>): Prisma.PrismaPromise<GetMembershipPlanAggregateType<T>>

    /**
     * Group by MembershipPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembershipPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipPlanGroupByArgs['orderBy'] }
        : { orderBy?: MembershipPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembershipPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembershipPlan model
   */
  readonly fields: MembershipPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembershipPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memberships<T extends MembershipPlan$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, MembershipPlan$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MembershipPlan model
   */
  interface MembershipPlanFieldRefs {
    readonly id: FieldRef<"MembershipPlan", 'String'>
    readonly adminId: FieldRef<"MembershipPlan", 'String'>
    readonly name: FieldRef<"MembershipPlan", 'String'>
    readonly description: FieldRef<"MembershipPlan", 'String'>
    readonly price: FieldRef<"MembershipPlan", 'Decimal'>
    readonly durationInDays: FieldRef<"MembershipPlan", 'Int'>
    readonly features: FieldRef<"MembershipPlan", 'Json'>
    readonly status: FieldRef<"MembershipPlan", 'PlanStatus'>
    readonly createdAt: FieldRef<"MembershipPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"MembershipPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MembershipPlan findUnique
   */
  export type MembershipPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlan to fetch.
     */
    where: MembershipPlanWhereUniqueInput
  }

  /**
   * MembershipPlan findUniqueOrThrow
   */
  export type MembershipPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlan to fetch.
     */
    where: MembershipPlanWhereUniqueInput
  }

  /**
   * MembershipPlan findFirst
   */
  export type MembershipPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlan to fetch.
     */
    where?: MembershipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPlans to fetch.
     */
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipPlans.
     */
    cursor?: MembershipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipPlans.
     */
    distinct?: MembershipPlanScalarFieldEnum | MembershipPlanScalarFieldEnum[]
  }

  /**
   * MembershipPlan findFirstOrThrow
   */
  export type MembershipPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlan to fetch.
     */
    where?: MembershipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPlans to fetch.
     */
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipPlans.
     */
    cursor?: MembershipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipPlans.
     */
    distinct?: MembershipPlanScalarFieldEnum | MembershipPlanScalarFieldEnum[]
  }

  /**
   * MembershipPlan findMany
   */
  export type MembershipPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter, which MembershipPlans to fetch.
     */
    where?: MembershipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipPlans to fetch.
     */
    orderBy?: MembershipPlanOrderByWithRelationInput | MembershipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembershipPlans.
     */
    cursor?: MembershipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipPlans.
     */
    skip?: number
    distinct?: MembershipPlanScalarFieldEnum | MembershipPlanScalarFieldEnum[]
  }

  /**
   * MembershipPlan create
   */
  export type MembershipPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a MembershipPlan.
     */
    data: XOR<MembershipPlanCreateInput, MembershipPlanUncheckedCreateInput>
  }

  /**
   * MembershipPlan createMany
   */
  export type MembershipPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembershipPlans.
     */
    data: MembershipPlanCreateManyInput | MembershipPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipPlan update
   */
  export type MembershipPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a MembershipPlan.
     */
    data: XOR<MembershipPlanUpdateInput, MembershipPlanUncheckedUpdateInput>
    /**
     * Choose, which MembershipPlan to update.
     */
    where: MembershipPlanWhereUniqueInput
  }

  /**
   * MembershipPlan updateMany
   */
  export type MembershipPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembershipPlans.
     */
    data: XOR<MembershipPlanUpdateManyMutationInput, MembershipPlanUncheckedUpdateManyInput>
    /**
     * Filter which MembershipPlans to update
     */
    where?: MembershipPlanWhereInput
    /**
     * Limit how many MembershipPlans to update.
     */
    limit?: number
  }

  /**
   * MembershipPlan upsert
   */
  export type MembershipPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the MembershipPlan to update in case it exists.
     */
    where: MembershipPlanWhereUniqueInput
    /**
     * In case the MembershipPlan found by the `where` argument doesn't exist, create a new MembershipPlan with this data.
     */
    create: XOR<MembershipPlanCreateInput, MembershipPlanUncheckedCreateInput>
    /**
     * In case the MembershipPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipPlanUpdateInput, MembershipPlanUncheckedUpdateInput>
  }

  /**
   * MembershipPlan delete
   */
  export type MembershipPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
    /**
     * Filter which MembershipPlan to delete.
     */
    where: MembershipPlanWhereUniqueInput
  }

  /**
   * MembershipPlan deleteMany
   */
  export type MembershipPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipPlans to delete
     */
    where?: MembershipPlanWhereInput
    /**
     * Limit how many MembershipPlans to delete.
     */
    limit?: number
  }

  /**
   * MembershipPlan.memberships
   */
  export type MembershipPlan$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * MembershipPlan without action
   */
  export type MembershipPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipPlan
     */
    select?: MembershipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipPlan
     */
    omit?: MembershipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipPlanInclude<ExtArgs> | null
  }


  /**
   * Model Membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null
    _avg: MembershipAvgAggregateOutputType | null
    _sum: MembershipSumAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type MembershipSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type MembershipMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    membershipPlanId: string | null
    membershipName: string | null
    amount: Decimal | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.MembershipStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    membershipPlanId: string | null
    membershipName: string | null
    amount: Decimal | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.MembershipStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipCountAggregateOutputType = {
    id: number
    memberId: number
    membershipPlanId: number
    membershipName: number
    amount: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipAvgAggregateInputType = {
    amount?: true
  }

  export type MembershipSumAggregateInputType = {
    amount?: true
  }

  export type MembershipMinAggregateInputType = {
    id?: true
    memberId?: true
    membershipPlanId?: true
    membershipName?: true
    amount?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipMaxAggregateInputType = {
    id?: true
    memberId?: true
    membershipPlanId?: true
    membershipName?: true
    amount?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipCountAggregateInputType = {
    id?: true
    memberId?: true
    membershipPlanId?: true
    membershipName?: true
    amount?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membership to aggregate.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipMaxAggregateInputType
  }

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>
  }




  export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
    having?: MembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountAggregateInputType | true
    _avg?: MembershipAvgAggregateInputType
    _sum?: MembershipSumAggregateInputType
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    id: string
    memberId: string
    membershipPlanId: string
    membershipName: string
    amount: Decimal
    startDate: Date
    endDate: Date
    status: $Enums.MembershipStatus
    createdAt: Date
    updatedAt: Date
    _count: MembershipCountAggregateOutputType | null
    _avg: MembershipAvgAggregateOutputType | null
    _sum: MembershipSumAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
        }
      >
    >


  export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    membershipPlanId?: boolean
    membershipName?: boolean
    amount?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    membershipPlan?: boolean | MembershipPlanDefaultArgs<ExtArgs>
    payments?: boolean | Membership$paymentsArgs<ExtArgs>
    _count?: boolean | MembershipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>



  export type MembershipSelectScalar = {
    id?: boolean
    memberId?: boolean
    membershipPlanId?: boolean
    membershipName?: boolean
    amount?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "membershipPlanId" | "membershipName" | "amount" | "startDate" | "endDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["membership"]>
  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    membershipPlan?: boolean | MembershipPlanDefaultArgs<ExtArgs>
    payments?: boolean | Membership$paymentsArgs<ExtArgs>
    _count?: boolean | MembershipCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      membershipPlan: Prisma.$MembershipPlanPayload<ExtArgs>
      payments: Prisma.$MemberPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      membershipPlanId: string
      membershipName: string
      amount: Prisma.Decimal
      startDate: Date
      endDate: Date
      status: $Enums.MembershipStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membership"]>
    composites: {}
  }

  type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

  type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipCountAggregateInputType | true
    }

  export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }
    /**
     * Find zero or one Membership that matches the filter.
     * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipFindUniqueArgs>(args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Membership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipFindFirstArgs>(args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipWithIdOnly = await prisma.membership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipFindManyArgs>(args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Membership.
     * @param {MembershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     * 
     */
    create<T extends MembershipCreateArgs>(args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memberships.
     * @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipCreateManyArgs>(args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Membership.
     * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     * 
     */
    delete<T extends MembershipDeleteArgs>(args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Membership.
     * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipUpdateArgs>(args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipDeleteManyArgs>(args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipUpdateManyArgs>(args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Membership.
     * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
     */
    upsert<T extends MembershipUpsertArgs>(args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountArgs>(
      args?: Subset<T, MembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipGroupByArgs['orderBy'] }
        : { orderBy?: MembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membership model
   */
  readonly fields: MembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membershipPlan<T extends MembershipPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembershipPlanDefaultArgs<ExtArgs>>): Prisma__MembershipPlanClient<$Result.GetResult<Prisma.$MembershipPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Membership$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Membership$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Membership model
   */
  interface MembershipFieldRefs {
    readonly id: FieldRef<"Membership", 'String'>
    readonly memberId: FieldRef<"Membership", 'String'>
    readonly membershipPlanId: FieldRef<"Membership", 'String'>
    readonly membershipName: FieldRef<"Membership", 'String'>
    readonly amount: FieldRef<"Membership", 'Decimal'>
    readonly startDate: FieldRef<"Membership", 'DateTime'>
    readonly endDate: FieldRef<"Membership", 'DateTime'>
    readonly status: FieldRef<"Membership", 'MembershipStatus'>
    readonly createdAt: FieldRef<"Membership", 'DateTime'>
    readonly updatedAt: FieldRef<"Membership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Membership findUnique
   */
  export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findUniqueOrThrow
   */
  export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findFirst
   */
  export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findFirstOrThrow
   */
  export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findMany
   */
  export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership create
   */
  export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Membership.
     */
    data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
  }

  /**
   * Membership createMany
   */
  export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membership update
   */
  export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Membership.
     */
    data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    /**
     * Choose, which Membership to update.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership updateMany
   */
  export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to update.
     */
    limit?: number
  }

  /**
   * Membership upsert
   */
  export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Membership to update in case it exists.
     */
    where: MembershipWhereUniqueInput
    /**
     * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
     */
    create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    /**
     * In case the Membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
  }

  /**
   * Membership delete
   */
  export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter which Membership to delete.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership deleteMany
   */
  export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to delete.
     */
    limit?: number
  }

  /**
   * Membership.payments
   */
  export type Membership$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    where?: MemberPaymentWhereInput
    orderBy?: MemberPaymentOrderByWithRelationInput | MemberPaymentOrderByWithRelationInput[]
    cursor?: MemberPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberPaymentScalarFieldEnum | MemberPaymentScalarFieldEnum[]
  }

  /**
   * Membership without action
   */
  export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
  }


  /**
   * Model MemberPayment
   */

  export type AggregateMemberPayment = {
    _count: MemberPaymentCountAggregateOutputType | null
    _avg: MemberPaymentAvgAggregateOutputType | null
    _sum: MemberPaymentSumAggregateOutputType | null
    _min: MemberPaymentMinAggregateOutputType | null
    _max: MemberPaymentMaxAggregateOutputType | null
  }

  export type MemberPaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type MemberPaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type MemberPaymentMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    memberId: string | null
    membershipId: string | null
    amount: Decimal | null
    currency: string | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    notes: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberPaymentMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    memberId: string | null
    membershipId: string | null
    amount: Decimal | null
    currency: string | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    notes: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberPaymentCountAggregateOutputType = {
    id: number
    adminId: number
    memberId: number
    membershipId: number
    amount: number
    currency: number
    paymentMethod: number
    status: number
    transactionId: number
    notes: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type MemberPaymentSumAggregateInputType = {
    amount?: true
  }

  export type MemberPaymentMinAggregateInputType = {
    id?: true
    adminId?: true
    memberId?: true
    membershipId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    notes?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberPaymentMaxAggregateInputType = {
    id?: true
    adminId?: true
    memberId?: true
    membershipId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    notes?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberPaymentCountAggregateInputType = {
    id?: true
    adminId?: true
    memberId?: true
    membershipId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    notes?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberPayment to aggregate.
     */
    where?: MemberPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberPayments to fetch.
     */
    orderBy?: MemberPaymentOrderByWithRelationInput | MemberPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberPayments
    **/
    _count?: true | MemberPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberPaymentMaxAggregateInputType
  }

  export type GetMemberPaymentAggregateType<T extends MemberPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberPayment[P]>
      : GetScalarType<T[P], AggregateMemberPayment[P]>
  }




  export type MemberPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberPaymentWhereInput
    orderBy?: MemberPaymentOrderByWithAggregationInput | MemberPaymentOrderByWithAggregationInput[]
    by: MemberPaymentScalarFieldEnum[] | MemberPaymentScalarFieldEnum
    having?: MemberPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberPaymentCountAggregateInputType | true
    _avg?: MemberPaymentAvgAggregateInputType
    _sum?: MemberPaymentSumAggregateInputType
    _min?: MemberPaymentMinAggregateInputType
    _max?: MemberPaymentMaxAggregateInputType
  }

  export type MemberPaymentGroupByOutputType = {
    id: string
    adminId: string
    memberId: string
    membershipId: string | null
    amount: Decimal
    currency: string
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus
    transactionId: string | null
    notes: string | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MemberPaymentCountAggregateOutputType | null
    _avg: MemberPaymentAvgAggregateOutputType | null
    _sum: MemberPaymentSumAggregateOutputType | null
    _min: MemberPaymentMinAggregateOutputType | null
    _max: MemberPaymentMaxAggregateOutputType | null
  }

  type GetMemberPaymentGroupByPayload<T extends MemberPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], MemberPaymentGroupByOutputType[P]>
        }
      >
    >


  export type MemberPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    memberId?: boolean
    membershipId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    notes?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
    membership?: boolean | MemberPayment$membershipArgs<ExtArgs>
  }, ExtArgs["result"]["memberPayment"]>



  export type MemberPaymentSelectScalar = {
    id?: boolean
    adminId?: boolean
    memberId?: boolean
    membershipId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    notes?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "memberId" | "membershipId" | "amount" | "currency" | "paymentMethod" | "status" | "transactionId" | "notes" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["memberPayment"]>
  export type MemberPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
    membership?: boolean | MemberPayment$membershipArgs<ExtArgs>
  }

  export type $MemberPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberPayment"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs>
      membership: Prisma.$MembershipPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      memberId: string
      membershipId: string | null
      amount: Prisma.Decimal
      currency: string
      paymentMethod: $Enums.PaymentMethod | null
      status: $Enums.PaymentStatus
      transactionId: string | null
      notes: string | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["memberPayment"]>
    composites: {}
  }

  type MemberPaymentGetPayload<S extends boolean | null | undefined | MemberPaymentDefaultArgs> = $Result.GetResult<Prisma.$MemberPaymentPayload, S>

  type MemberPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberPaymentCountAggregateInputType | true
    }

  export interface MemberPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberPayment'], meta: { name: 'MemberPayment' } }
    /**
     * Find zero or one MemberPayment that matches the filter.
     * @param {MemberPaymentFindUniqueArgs} args - Arguments to find a MemberPayment
     * @example
     * // Get one MemberPayment
     * const memberPayment = await prisma.memberPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberPaymentFindUniqueArgs>(args: SelectSubset<T, MemberPaymentFindUniqueArgs<ExtArgs>>): Prisma__MemberPaymentClient<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberPaymentFindUniqueOrThrowArgs} args - Arguments to find a MemberPayment
     * @example
     * // Get one MemberPayment
     * const memberPayment = await prisma.memberPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberPaymentClient<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentFindFirstArgs} args - Arguments to find a MemberPayment
     * @example
     * // Get one MemberPayment
     * const memberPayment = await prisma.memberPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberPaymentFindFirstArgs>(args?: SelectSubset<T, MemberPaymentFindFirstArgs<ExtArgs>>): Prisma__MemberPaymentClient<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentFindFirstOrThrowArgs} args - Arguments to find a MemberPayment
     * @example
     * // Get one MemberPayment
     * const memberPayment = await prisma.memberPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberPaymentClient<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberPayments
     * const memberPayments = await prisma.memberPayment.findMany()
     * 
     * // Get first 10 MemberPayments
     * const memberPayments = await prisma.memberPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberPaymentWithIdOnly = await prisma.memberPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberPaymentFindManyArgs>(args?: SelectSubset<T, MemberPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberPayment.
     * @param {MemberPaymentCreateArgs} args - Arguments to create a MemberPayment.
     * @example
     * // Create one MemberPayment
     * const MemberPayment = await prisma.memberPayment.create({
     *   data: {
     *     // ... data to create a MemberPayment
     *   }
     * })
     * 
     */
    create<T extends MemberPaymentCreateArgs>(args: SelectSubset<T, MemberPaymentCreateArgs<ExtArgs>>): Prisma__MemberPaymentClient<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberPayments.
     * @param {MemberPaymentCreateManyArgs} args - Arguments to create many MemberPayments.
     * @example
     * // Create many MemberPayments
     * const memberPayment = await prisma.memberPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberPaymentCreateManyArgs>(args?: SelectSubset<T, MemberPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MemberPayment.
     * @param {MemberPaymentDeleteArgs} args - Arguments to delete one MemberPayment.
     * @example
     * // Delete one MemberPayment
     * const MemberPayment = await prisma.memberPayment.delete({
     *   where: {
     *     // ... filter to delete one MemberPayment
     *   }
     * })
     * 
     */
    delete<T extends MemberPaymentDeleteArgs>(args: SelectSubset<T, MemberPaymentDeleteArgs<ExtArgs>>): Prisma__MemberPaymentClient<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberPayment.
     * @param {MemberPaymentUpdateArgs} args - Arguments to update one MemberPayment.
     * @example
     * // Update one MemberPayment
     * const memberPayment = await prisma.memberPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberPaymentUpdateArgs>(args: SelectSubset<T, MemberPaymentUpdateArgs<ExtArgs>>): Prisma__MemberPaymentClient<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberPayments.
     * @param {MemberPaymentDeleteManyArgs} args - Arguments to filter MemberPayments to delete.
     * @example
     * // Delete a few MemberPayments
     * const { count } = await prisma.memberPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberPaymentDeleteManyArgs>(args?: SelectSubset<T, MemberPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberPayments
     * const memberPayment = await prisma.memberPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberPaymentUpdateManyArgs>(args: SelectSubset<T, MemberPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MemberPayment.
     * @param {MemberPaymentUpsertArgs} args - Arguments to update or create a MemberPayment.
     * @example
     * // Update or create a MemberPayment
     * const memberPayment = await prisma.memberPayment.upsert({
     *   create: {
     *     // ... data to create a MemberPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberPayment we want to update
     *   }
     * })
     */
    upsert<T extends MemberPaymentUpsertArgs>(args: SelectSubset<T, MemberPaymentUpsertArgs<ExtArgs>>): Prisma__MemberPaymentClient<$Result.GetResult<Prisma.$MemberPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentCountArgs} args - Arguments to filter MemberPayments to count.
     * @example
     * // Count the number of MemberPayments
     * const count = await prisma.memberPayment.count({
     *   where: {
     *     // ... the filter for the MemberPayments we want to count
     *   }
     * })
    **/
    count<T extends MemberPaymentCountArgs>(
      args?: Subset<T, MemberPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberPaymentAggregateArgs>(args: Subset<T, MemberPaymentAggregateArgs>): Prisma.PrismaPromise<GetMemberPaymentAggregateType<T>>

    /**
     * Group by MemberPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberPaymentGroupByArgs['orderBy'] }
        : { orderBy?: MemberPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberPayment model
   */
  readonly fields: MemberPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membership<T extends MemberPayment$membershipArgs<ExtArgs> = {}>(args?: Subset<T, MemberPayment$membershipArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemberPayment model
   */
  interface MemberPaymentFieldRefs {
    readonly id: FieldRef<"MemberPayment", 'String'>
    readonly adminId: FieldRef<"MemberPayment", 'String'>
    readonly memberId: FieldRef<"MemberPayment", 'String'>
    readonly membershipId: FieldRef<"MemberPayment", 'String'>
    readonly amount: FieldRef<"MemberPayment", 'Decimal'>
    readonly currency: FieldRef<"MemberPayment", 'String'>
    readonly paymentMethod: FieldRef<"MemberPayment", 'PaymentMethod'>
    readonly status: FieldRef<"MemberPayment", 'PaymentStatus'>
    readonly transactionId: FieldRef<"MemberPayment", 'String'>
    readonly notes: FieldRef<"MemberPayment", 'String'>
    readonly paidAt: FieldRef<"MemberPayment", 'DateTime'>
    readonly createdAt: FieldRef<"MemberPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"MemberPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberPayment findUnique
   */
  export type MemberPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayment to fetch.
     */
    where: MemberPaymentWhereUniqueInput
  }

  /**
   * MemberPayment findUniqueOrThrow
   */
  export type MemberPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayment to fetch.
     */
    where: MemberPaymentWhereUniqueInput
  }

  /**
   * MemberPayment findFirst
   */
  export type MemberPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayment to fetch.
     */
    where?: MemberPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberPayments to fetch.
     */
    orderBy?: MemberPaymentOrderByWithRelationInput | MemberPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberPayments.
     */
    cursor?: MemberPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberPayments.
     */
    distinct?: MemberPaymentScalarFieldEnum | MemberPaymentScalarFieldEnum[]
  }

  /**
   * MemberPayment findFirstOrThrow
   */
  export type MemberPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayment to fetch.
     */
    where?: MemberPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberPayments to fetch.
     */
    orderBy?: MemberPaymentOrderByWithRelationInput | MemberPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberPayments.
     */
    cursor?: MemberPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberPayments.
     */
    distinct?: MemberPaymentScalarFieldEnum | MemberPaymentScalarFieldEnum[]
  }

  /**
   * MemberPayment findMany
   */
  export type MemberPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    /**
     * Filter, which MemberPayments to fetch.
     */
    where?: MemberPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberPayments to fetch.
     */
    orderBy?: MemberPaymentOrderByWithRelationInput | MemberPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberPayments.
     */
    cursor?: MemberPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberPayments.
     */
    skip?: number
    distinct?: MemberPaymentScalarFieldEnum | MemberPaymentScalarFieldEnum[]
  }

  /**
   * MemberPayment create
   */
  export type MemberPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberPayment.
     */
    data: XOR<MemberPaymentCreateInput, MemberPaymentUncheckedCreateInput>
  }

  /**
   * MemberPayment createMany
   */
  export type MemberPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberPayments.
     */
    data: MemberPaymentCreateManyInput | MemberPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberPayment update
   */
  export type MemberPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberPayment.
     */
    data: XOR<MemberPaymentUpdateInput, MemberPaymentUncheckedUpdateInput>
    /**
     * Choose, which MemberPayment to update.
     */
    where: MemberPaymentWhereUniqueInput
  }

  /**
   * MemberPayment updateMany
   */
  export type MemberPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberPayments.
     */
    data: XOR<MemberPaymentUpdateManyMutationInput, MemberPaymentUncheckedUpdateManyInput>
    /**
     * Filter which MemberPayments to update
     */
    where?: MemberPaymentWhereInput
    /**
     * Limit how many MemberPayments to update.
     */
    limit?: number
  }

  /**
   * MemberPayment upsert
   */
  export type MemberPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberPayment to update in case it exists.
     */
    where: MemberPaymentWhereUniqueInput
    /**
     * In case the MemberPayment found by the `where` argument doesn't exist, create a new MemberPayment with this data.
     */
    create: XOR<MemberPaymentCreateInput, MemberPaymentUncheckedCreateInput>
    /**
     * In case the MemberPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberPaymentUpdateInput, MemberPaymentUncheckedUpdateInput>
  }

  /**
   * MemberPayment delete
   */
  export type MemberPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
    /**
     * Filter which MemberPayment to delete.
     */
    where: MemberPaymentWhereUniqueInput
  }

  /**
   * MemberPayment deleteMany
   */
  export type MemberPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberPayments to delete
     */
    where?: MemberPaymentWhereInput
    /**
     * Limit how many MemberPayments to delete.
     */
    limit?: number
  }

  /**
   * MemberPayment.membership
   */
  export type MemberPayment$membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
  }

  /**
   * MemberPayment without action
   */
  export type MemberPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberPayment
     */
    select?: MemberPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberPayment
     */
    omit?: MemberPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberPaymentInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    name: string | null
    username: string | null
    email: string | null
    mobileNumber: string | null
    passwordHash: string | null
    staffType: $Enums.StaffType | null
    designation: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    status: $Enums.StaffStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    name: string | null
    username: string | null
    email: string | null
    mobileNumber: string | null
    passwordHash: string | null
    staffType: $Enums.StaffType | null
    designation: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    status: $Enums.StaffStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    adminId: number
    name: number
    username: number
    email: number
    mobileNumber: number
    passwordHash: number
    staffType: number
    designation: number
    address: number
    city: number
    state: number
    pincode: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    username?: true
    email?: true
    mobileNumber?: true
    passwordHash?: true
    staffType?: true
    designation?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    username?: true
    email?: true
    mobileNumber?: true
    passwordHash?: true
    staffType?: true
    designation?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    username?: true
    email?: true
    mobileNumber?: true
    passwordHash?: true
    staffType?: true
    designation?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    adminId: string
    name: string
    username: string | null
    email: string | null
    mobileNumber: string
    passwordHash: string | null
    staffType: $Enums.StaffType
    designation: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    status: $Enums.StaffStatus
    createdAt: Date
    updatedAt: Date
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    mobileNumber?: boolean
    passwordHash?: boolean
    staffType?: boolean
    designation?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendances?: boolean | Staff$attendancesArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>



  export type StaffSelectScalar = {
    id?: boolean
    adminId?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    mobileNumber?: boolean
    passwordHash?: boolean
    staffType?: boolean
    designation?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "name" | "username" | "email" | "mobileNumber" | "passwordHash" | "staffType" | "designation" | "address" | "city" | "state" | "pincode" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | Staff$attendancesArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      attendances: Prisma.$StaffAttendancePayload<ExtArgs>[]
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      name: string
      username: string | null
      email: string | null
      mobileNumber: string
      passwordHash: string | null
      staffType: $Enums.StaffType
      designation: string | null
      address: string | null
      city: string | null
      state: string | null
      pincode: string | null
      status: $Enums.StaffStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends Staff$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Staff$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly adminId: FieldRef<"Staff", 'String'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly username: FieldRef<"Staff", 'String'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly mobileNumber: FieldRef<"Staff", 'String'>
    readonly passwordHash: FieldRef<"Staff", 'String'>
    readonly staffType: FieldRef<"Staff", 'StaffType'>
    readonly designation: FieldRef<"Staff", 'String'>
    readonly address: FieldRef<"Staff", 'String'>
    readonly city: FieldRef<"Staff", 'String'>
    readonly state: FieldRef<"Staff", 'String'>
    readonly pincode: FieldRef<"Staff", 'String'>
    readonly status: FieldRef<"Staff", 'StaffStatus'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.attendances
   */
  export type Staff$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    where?: StaffAttendanceWhereInput
    orderBy?: StaffAttendanceOrderByWithRelationInput | StaffAttendanceOrderByWithRelationInput[]
    cursor?: StaffAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffAttendanceScalarFieldEnum | StaffAttendanceScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model StaffAttendance
   */

  export type AggregateStaffAttendance = {
    _count: StaffAttendanceCountAggregateOutputType | null
    _min: StaffAttendanceMinAggregateOutputType | null
    _max: StaffAttendanceMaxAggregateOutputType | null
  }

  export type StaffAttendanceMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    staffId: string | null
    attendanceDate: Date | null
    checkIn: Date | null
    checkOut: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffAttendanceMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    staffId: string | null
    attendanceDate: Date | null
    checkIn: Date | null
    checkOut: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffAttendanceCountAggregateOutputType = {
    id: number
    adminId: number
    staffId: number
    attendanceDate: number
    checkIn: number
    checkOut: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffAttendanceMinAggregateInputType = {
    id?: true
    adminId?: true
    staffId?: true
    attendanceDate?: true
    checkIn?: true
    checkOut?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffAttendanceMaxAggregateInputType = {
    id?: true
    adminId?: true
    staffId?: true
    attendanceDate?: true
    checkIn?: true
    checkOut?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffAttendanceCountAggregateInputType = {
    id?: true
    adminId?: true
    staffId?: true
    attendanceDate?: true
    checkIn?: true
    checkOut?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAttendance to aggregate.
     */
    where?: StaffAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAttendances to fetch.
     */
    orderBy?: StaffAttendanceOrderByWithRelationInput | StaffAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffAttendances
    **/
    _count?: true | StaffAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffAttendanceMaxAggregateInputType
  }

  export type GetStaffAttendanceAggregateType<T extends StaffAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffAttendance[P]>
      : GetScalarType<T[P], AggregateStaffAttendance[P]>
  }




  export type StaffAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAttendanceWhereInput
    orderBy?: StaffAttendanceOrderByWithAggregationInput | StaffAttendanceOrderByWithAggregationInput[]
    by: StaffAttendanceScalarFieldEnum[] | StaffAttendanceScalarFieldEnum
    having?: StaffAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffAttendanceCountAggregateInputType | true
    _min?: StaffAttendanceMinAggregateInputType
    _max?: StaffAttendanceMaxAggregateInputType
  }

  export type StaffAttendanceGroupByOutputType = {
    id: string
    adminId: string
    staffId: string
    attendanceDate: Date
    checkIn: Date | null
    checkOut: Date | null
    status: $Enums.AttendanceStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: StaffAttendanceCountAggregateOutputType | null
    _min: StaffAttendanceMinAggregateOutputType | null
    _max: StaffAttendanceMaxAggregateOutputType | null
  }

  type GetStaffAttendanceGroupByPayload<T extends StaffAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], StaffAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type StaffAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    staffId?: boolean
    attendanceDate?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAttendance"]>



  export type StaffAttendanceSelectScalar = {
    id?: boolean
    adminId?: boolean
    staffId?: boolean
    attendanceDate?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "staffId" | "attendanceDate" | "checkIn" | "checkOut" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["staffAttendance"]>
  export type StaffAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }

  export type $StaffAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffAttendance"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      staff: Prisma.$StaffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      staffId: string
      attendanceDate: Date
      checkIn: Date | null
      checkOut: Date | null
      status: $Enums.AttendanceStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staffAttendance"]>
    composites: {}
  }

  type StaffAttendanceGetPayload<S extends boolean | null | undefined | StaffAttendanceDefaultArgs> = $Result.GetResult<Prisma.$StaffAttendancePayload, S>

  type StaffAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffAttendanceCountAggregateInputType | true
    }

  export interface StaffAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffAttendance'], meta: { name: 'StaffAttendance' } }
    /**
     * Find zero or one StaffAttendance that matches the filter.
     * @param {StaffAttendanceFindUniqueArgs} args - Arguments to find a StaffAttendance
     * @example
     * // Get one StaffAttendance
     * const staffAttendance = await prisma.staffAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffAttendanceFindUniqueArgs>(args: SelectSubset<T, StaffAttendanceFindUniqueArgs<ExtArgs>>): Prisma__StaffAttendanceClient<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffAttendanceFindUniqueOrThrowArgs} args - Arguments to find a StaffAttendance
     * @example
     * // Get one StaffAttendance
     * const staffAttendance = await prisma.staffAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffAttendanceClient<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAttendanceFindFirstArgs} args - Arguments to find a StaffAttendance
     * @example
     * // Get one StaffAttendance
     * const staffAttendance = await prisma.staffAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffAttendanceFindFirstArgs>(args?: SelectSubset<T, StaffAttendanceFindFirstArgs<ExtArgs>>): Prisma__StaffAttendanceClient<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAttendanceFindFirstOrThrowArgs} args - Arguments to find a StaffAttendance
     * @example
     * // Get one StaffAttendance
     * const staffAttendance = await prisma.staffAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffAttendanceClient<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffAttendances
     * const staffAttendances = await prisma.staffAttendance.findMany()
     * 
     * // Get first 10 StaffAttendances
     * const staffAttendances = await prisma.staffAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffAttendanceWithIdOnly = await prisma.staffAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffAttendanceFindManyArgs>(args?: SelectSubset<T, StaffAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffAttendance.
     * @param {StaffAttendanceCreateArgs} args - Arguments to create a StaffAttendance.
     * @example
     * // Create one StaffAttendance
     * const StaffAttendance = await prisma.staffAttendance.create({
     *   data: {
     *     // ... data to create a StaffAttendance
     *   }
     * })
     * 
     */
    create<T extends StaffAttendanceCreateArgs>(args: SelectSubset<T, StaffAttendanceCreateArgs<ExtArgs>>): Prisma__StaffAttendanceClient<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffAttendances.
     * @param {StaffAttendanceCreateManyArgs} args - Arguments to create many StaffAttendances.
     * @example
     * // Create many StaffAttendances
     * const staffAttendance = await prisma.staffAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffAttendanceCreateManyArgs>(args?: SelectSubset<T, StaffAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StaffAttendance.
     * @param {StaffAttendanceDeleteArgs} args - Arguments to delete one StaffAttendance.
     * @example
     * // Delete one StaffAttendance
     * const StaffAttendance = await prisma.staffAttendance.delete({
     *   where: {
     *     // ... filter to delete one StaffAttendance
     *   }
     * })
     * 
     */
    delete<T extends StaffAttendanceDeleteArgs>(args: SelectSubset<T, StaffAttendanceDeleteArgs<ExtArgs>>): Prisma__StaffAttendanceClient<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffAttendance.
     * @param {StaffAttendanceUpdateArgs} args - Arguments to update one StaffAttendance.
     * @example
     * // Update one StaffAttendance
     * const staffAttendance = await prisma.staffAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffAttendanceUpdateArgs>(args: SelectSubset<T, StaffAttendanceUpdateArgs<ExtArgs>>): Prisma__StaffAttendanceClient<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffAttendances.
     * @param {StaffAttendanceDeleteManyArgs} args - Arguments to filter StaffAttendances to delete.
     * @example
     * // Delete a few StaffAttendances
     * const { count } = await prisma.staffAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffAttendanceDeleteManyArgs>(args?: SelectSubset<T, StaffAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffAttendances
     * const staffAttendance = await prisma.staffAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffAttendanceUpdateManyArgs>(args: SelectSubset<T, StaffAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StaffAttendance.
     * @param {StaffAttendanceUpsertArgs} args - Arguments to update or create a StaffAttendance.
     * @example
     * // Update or create a StaffAttendance
     * const staffAttendance = await prisma.staffAttendance.upsert({
     *   create: {
     *     // ... data to create a StaffAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffAttendance we want to update
     *   }
     * })
     */
    upsert<T extends StaffAttendanceUpsertArgs>(args: SelectSubset<T, StaffAttendanceUpsertArgs<ExtArgs>>): Prisma__StaffAttendanceClient<$Result.GetResult<Prisma.$StaffAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAttendanceCountArgs} args - Arguments to filter StaffAttendances to count.
     * @example
     * // Count the number of StaffAttendances
     * const count = await prisma.staffAttendance.count({
     *   where: {
     *     // ... the filter for the StaffAttendances we want to count
     *   }
     * })
    **/
    count<T extends StaffAttendanceCountArgs>(
      args?: Subset<T, StaffAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAttendanceAggregateArgs>(args: Subset<T, StaffAttendanceAggregateArgs>): Prisma.PrismaPromise<GetStaffAttendanceAggregateType<T>>

    /**
     * Group by StaffAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: StaffAttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffAttendance model
   */
  readonly fields: StaffAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaffAttendance model
   */
  interface StaffAttendanceFieldRefs {
    readonly id: FieldRef<"StaffAttendance", 'String'>
    readonly adminId: FieldRef<"StaffAttendance", 'String'>
    readonly staffId: FieldRef<"StaffAttendance", 'String'>
    readonly attendanceDate: FieldRef<"StaffAttendance", 'DateTime'>
    readonly checkIn: FieldRef<"StaffAttendance", 'DateTime'>
    readonly checkOut: FieldRef<"StaffAttendance", 'DateTime'>
    readonly status: FieldRef<"StaffAttendance", 'AttendanceStatus'>
    readonly notes: FieldRef<"StaffAttendance", 'String'>
    readonly createdAt: FieldRef<"StaffAttendance", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffAttendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffAttendance findUnique
   */
  export type StaffAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StaffAttendance to fetch.
     */
    where: StaffAttendanceWhereUniqueInput
  }

  /**
   * StaffAttendance findUniqueOrThrow
   */
  export type StaffAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StaffAttendance to fetch.
     */
    where: StaffAttendanceWhereUniqueInput
  }

  /**
   * StaffAttendance findFirst
   */
  export type StaffAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StaffAttendance to fetch.
     */
    where?: StaffAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAttendances to fetch.
     */
    orderBy?: StaffAttendanceOrderByWithRelationInput | StaffAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAttendances.
     */
    cursor?: StaffAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAttendances.
     */
    distinct?: StaffAttendanceScalarFieldEnum | StaffAttendanceScalarFieldEnum[]
  }

  /**
   * StaffAttendance findFirstOrThrow
   */
  export type StaffAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StaffAttendance to fetch.
     */
    where?: StaffAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAttendances to fetch.
     */
    orderBy?: StaffAttendanceOrderByWithRelationInput | StaffAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAttendances.
     */
    cursor?: StaffAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAttendances.
     */
    distinct?: StaffAttendanceScalarFieldEnum | StaffAttendanceScalarFieldEnum[]
  }

  /**
   * StaffAttendance findMany
   */
  export type StaffAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StaffAttendances to fetch.
     */
    where?: StaffAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAttendances to fetch.
     */
    orderBy?: StaffAttendanceOrderByWithRelationInput | StaffAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffAttendances.
     */
    cursor?: StaffAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAttendances.
     */
    skip?: number
    distinct?: StaffAttendanceScalarFieldEnum | StaffAttendanceScalarFieldEnum[]
  }

  /**
   * StaffAttendance create
   */
  export type StaffAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffAttendance.
     */
    data: XOR<StaffAttendanceCreateInput, StaffAttendanceUncheckedCreateInput>
  }

  /**
   * StaffAttendance createMany
   */
  export type StaffAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffAttendances.
     */
    data: StaffAttendanceCreateManyInput | StaffAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffAttendance update
   */
  export type StaffAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffAttendance.
     */
    data: XOR<StaffAttendanceUpdateInput, StaffAttendanceUncheckedUpdateInput>
    /**
     * Choose, which StaffAttendance to update.
     */
    where: StaffAttendanceWhereUniqueInput
  }

  /**
   * StaffAttendance updateMany
   */
  export type StaffAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffAttendances.
     */
    data: XOR<StaffAttendanceUpdateManyMutationInput, StaffAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which StaffAttendances to update
     */
    where?: StaffAttendanceWhereInput
    /**
     * Limit how many StaffAttendances to update.
     */
    limit?: number
  }

  /**
   * StaffAttendance upsert
   */
  export type StaffAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffAttendance to update in case it exists.
     */
    where: StaffAttendanceWhereUniqueInput
    /**
     * In case the StaffAttendance found by the `where` argument doesn't exist, create a new StaffAttendance with this data.
     */
    create: XOR<StaffAttendanceCreateInput, StaffAttendanceUncheckedCreateInput>
    /**
     * In case the StaffAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffAttendanceUpdateInput, StaffAttendanceUncheckedUpdateInput>
  }

  /**
   * StaffAttendance delete
   */
  export type StaffAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
    /**
     * Filter which StaffAttendance to delete.
     */
    where: StaffAttendanceWhereUniqueInput
  }

  /**
   * StaffAttendance deleteMany
   */
  export type StaffAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAttendances to delete
     */
    where?: StaffAttendanceWhereInput
    /**
     * Limit how many StaffAttendances to delete.
     */
    limit?: number
  }

  /**
   * StaffAttendance without action
   */
  export type StaffAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAttendance
     */
    select?: StaffAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAttendance
     */
    omit?: StaffAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAttendanceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    encryptedPassword: 'encryptedPassword',
    role: 'role',
    status: 'status',
    parentId: 'parentId',
    isFirstLogin: 'isFirstLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessName: 'businessName',
    businessType: 'businessType',
    mobileNumber: 'mobileNumber',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    billingInterval: 'billingInterval',
    durationInDays: 'durationInDays',
    maxMembers: 'maxMembers',
    maxStaff: 'maxStaff',
    maxBusinesses: 'maxBusinesses',
    features: 'features',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    paymentRequired: 'paymentRequired',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    autoRenew: 'autoRenew',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subscriptionId: 'subscriptionId',
    amount: 'amount',
    currency: 'currency',
    paymentMethod: 'paymentMethod',
    status: 'status',
    transactionId: 'transactionId',
    gatewayOrderId: 'gatewayOrderId',
    gatewayPaymentId: 'gatewayPaymentId',
    gatewaySignature: 'gatewaySignature',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    name: 'name',
    mobileNumber: 'mobileNumber',
    email: 'email',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    address: 'address',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const MembershipPlanScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    name: 'name',
    description: 'description',
    price: 'price',
    durationInDays: 'durationInDays',
    features: 'features',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipPlanScalarFieldEnum = (typeof MembershipPlanScalarFieldEnum)[keyof typeof MembershipPlanScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    membershipPlanId: 'membershipPlanId',
    membershipName: 'membershipName',
    amount: 'amount',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const MemberPaymentScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    memberId: 'memberId',
    membershipId: 'membershipId',
    amount: 'amount',
    currency: 'currency',
    paymentMethod: 'paymentMethod',
    status: 'status',
    transactionId: 'transactionId',
    notes: 'notes',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberPaymentScalarFieldEnum = (typeof MemberPaymentScalarFieldEnum)[keyof typeof MemberPaymentScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    name: 'name',
    username: 'username',
    email: 'email',
    mobileNumber: 'mobileNumber',
    passwordHash: 'passwordHash',
    staffType: 'staffType',
    designation: 'designation',
    address: 'address',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const StaffAttendanceScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    staffId: 'staffId',
    attendanceDate: 'attendanceDate',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffAttendanceScalarFieldEnum = (typeof StaffAttendanceScalarFieldEnum)[keyof typeof StaffAttendanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    encryptedPassword: 'encryptedPassword',
    parentId: 'parentId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const BusinessOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessName: 'businessName',
    mobileNumber: 'mobileNumber',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    pincode: 'pincode'
  };

  export type BusinessOrderByRelevanceFieldEnum = (typeof BusinessOrderByRelevanceFieldEnum)[keyof typeof BusinessOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const PlanOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type PlanOrderByRelevanceFieldEnum = (typeof PlanOrderByRelevanceFieldEnum)[keyof typeof PlanOrderByRelevanceFieldEnum]


  export const SubscriptionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId'
  };

  export type SubscriptionOrderByRelevanceFieldEnum = (typeof SubscriptionOrderByRelevanceFieldEnum)[keyof typeof SubscriptionOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    subscriptionId: 'subscriptionId',
    currency: 'currency',
    transactionId: 'transactionId',
    gatewayOrderId: 'gatewayOrderId',
    gatewayPaymentId: 'gatewayPaymentId',
    gatewaySignature: 'gatewaySignature'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const MemberOrderByRelevanceFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    name: 'name',
    mobileNumber: 'mobileNumber',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    pincode: 'pincode'
  };

  export type MemberOrderByRelevanceFieldEnum = (typeof MemberOrderByRelevanceFieldEnum)[keyof typeof MemberOrderByRelevanceFieldEnum]


  export const MembershipPlanOrderByRelevanceFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    name: 'name',
    description: 'description'
  };

  export type MembershipPlanOrderByRelevanceFieldEnum = (typeof MembershipPlanOrderByRelevanceFieldEnum)[keyof typeof MembershipPlanOrderByRelevanceFieldEnum]


  export const MembershipOrderByRelevanceFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    membershipPlanId: 'membershipPlanId',
    membershipName: 'membershipName'
  };

  export type MembershipOrderByRelevanceFieldEnum = (typeof MembershipOrderByRelevanceFieldEnum)[keyof typeof MembershipOrderByRelevanceFieldEnum]


  export const MemberPaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    memberId: 'memberId',
    membershipId: 'membershipId',
    currency: 'currency',
    transactionId: 'transactionId',
    notes: 'notes'
  };

  export type MemberPaymentOrderByRelevanceFieldEnum = (typeof MemberPaymentOrderByRelevanceFieldEnum)[keyof typeof MemberPaymentOrderByRelevanceFieldEnum]


  export const StaffOrderByRelevanceFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    name: 'name',
    username: 'username',
    email: 'email',
    mobileNumber: 'mobileNumber',
    passwordHash: 'passwordHash',
    designation: 'designation',
    address: 'address',
    city: 'city',
    state: 'state',
    pincode: 'pincode'
  };

  export type StaffOrderByRelevanceFieldEnum = (typeof StaffOrderByRelevanceFieldEnum)[keyof typeof StaffOrderByRelevanceFieldEnum]


  export const StaffAttendanceOrderByRelevanceFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    staffId: 'staffId',
    notes: 'notes'
  };

  export type StaffAttendanceOrderByRelevanceFieldEnum = (typeof StaffAttendanceOrderByRelevanceFieldEnum)[keyof typeof StaffAttendanceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BusinessType'
   */
  export type EnumBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'BillingInterval'
   */
  export type EnumBillingIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingInterval'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'MemberStatus'
   */
  export type EnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus'>
    


  /**
   * Reference to a field of type 'MembershipStatus'
   */
  export type EnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus'>
    


  /**
   * Reference to a field of type 'StaffType'
   */
  export type EnumStaffTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffType'>
    


  /**
   * Reference to a field of type 'StaffStatus'
   */
  export type EnumStaffStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    encryptedPassword?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    parentId?: StringNullableFilter<"User"> | string | null
    isFirstLogin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    subscriptions?: SubscriptionListRelationFilter
    payments?: PaymentListRelationFilter
    members?: MemberListRelationFilter
    staff?: StaffListRelationFilter
    staffAttendances?: StaffAttendanceListRelationFilter
    membershipPlans?: MembershipPlanListRelationFilter
    memberPayments?: MemberPaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    encryptedPassword?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isFirstLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: UserOrderByWithRelationInput
    children?: UserOrderByRelationAggregateInput
    business?: BusinessOrderByWithRelationInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    members?: MemberOrderByRelationAggregateInput
    staff?: StaffOrderByRelationAggregateInput
    staffAttendances?: StaffAttendanceOrderByRelationAggregateInput
    membershipPlans?: MembershipPlanOrderByRelationAggregateInput
    memberPayments?: MemberPaymentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    encryptedPassword?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    parentId?: StringNullableFilter<"User"> | string | null
    isFirstLogin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    subscriptions?: SubscriptionListRelationFilter
    payments?: PaymentListRelationFilter
    members?: MemberListRelationFilter
    staff?: StaffListRelationFilter
    staffAttendances?: StaffAttendanceListRelationFilter
    membershipPlans?: MembershipPlanListRelationFilter
    memberPayments?: MemberPaymentListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    encryptedPassword?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isFirstLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    encryptedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    parentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isFirstLogin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: StringFilter<"Business"> | string
    userId?: StringFilter<"Business"> | string
    businessName?: StringFilter<"Business"> | string
    businessType?: EnumBusinessTypeFilter<"Business"> | $Enums.BusinessType
    mobileNumber?: StringFilter<"Business"> | string
    email?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    city?: StringNullableFilter<"Business"> | string | null
    state?: StringNullableFilter<"Business"> | string | null
    pincode?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: BusinessOrderByRelevanceInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    businessName?: StringFilter<"Business"> | string
    businessType?: EnumBusinessTypeFilter<"Business"> | $Enums.BusinessType
    mobileNumber?: StringFilter<"Business"> | string
    email?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    city?: StringNullableFilter<"Business"> | string | null
    state?: StringNullableFilter<"Business"> | string | null
    pincode?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Business"> | string
    userId?: StringWithAggregatesFilter<"Business"> | string
    businessName?: StringWithAggregatesFilter<"Business"> | string
    businessType?: EnumBusinessTypeWithAggregatesFilter<"Business"> | $Enums.BusinessType
    mobileNumber?: StringWithAggregatesFilter<"Business"> | string
    email?: StringNullableWithAggregatesFilter<"Business"> | string | null
    address?: StringNullableWithAggregatesFilter<"Business"> | string | null
    city?: StringNullableWithAggregatesFilter<"Business"> | string | null
    state?: StringNullableWithAggregatesFilter<"Business"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"Business"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    billingInterval?: EnumBillingIntervalFilter<"Plan"> | $Enums.BillingInterval
    durationInDays?: IntFilter<"Plan"> | number
    maxMembers?: IntNullableFilter<"Plan"> | number | null
    maxStaff?: IntNullableFilter<"Plan"> | number | null
    maxBusinesses?: IntNullableFilter<"Plan"> | number | null
    features?: JsonNullableFilter<"Plan">
    status?: EnumPlanStatusFilter<"Plan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    billingInterval?: SortOrder
    durationInDays?: SortOrder
    maxMembers?: SortOrderInput | SortOrder
    maxStaff?: SortOrderInput | SortOrder
    maxBusinesses?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    _relevance?: PlanOrderByRelevanceInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    billingInterval?: EnumBillingIntervalFilter<"Plan"> | $Enums.BillingInterval
    durationInDays?: IntFilter<"Plan"> | number
    maxMembers?: IntNullableFilter<"Plan"> | number | null
    maxStaff?: IntNullableFilter<"Plan"> | number | null
    maxBusinesses?: IntNullableFilter<"Plan"> | number | null
    features?: JsonNullableFilter<"Plan">
    status?: EnumPlanStatusFilter<"Plan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    billingInterval?: SortOrder
    durationInDays?: SortOrder
    maxMembers?: SortOrderInput | SortOrder
    maxStaff?: SortOrderInput | SortOrder
    maxBusinesses?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    price?: DecimalWithAggregatesFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    billingInterval?: EnumBillingIntervalWithAggregatesFilter<"Plan"> | $Enums.BillingInterval
    durationInDays?: IntWithAggregatesFilter<"Plan"> | number
    maxMembers?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    maxStaff?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    maxBusinesses?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    features?: JsonNullableWithAggregatesFilter<"Plan">
    status?: EnumPlanStatusWithAggregatesFilter<"Plan"> | $Enums.PlanStatus
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    paymentRequired?: BoolFilter<"Subscription"> | boolean
    startDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    autoRenew?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    paymentRequired?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: SubscriptionOrderByRelevanceInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    paymentRequired?: BoolFilter<"Subscription"> | boolean
    startDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    autoRenew?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    paymentRequired?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    paymentRequired?: BoolWithAggregatesFilter<"Subscription"> | boolean
    startDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    autoRenew?: BoolWithAggregatesFilter<"Subscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    subscriptionId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    paymentMethod?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"Payment"> | string | null
    gatewayOrderId?: StringNullableFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    gatewaySignature?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    gatewayOrderId?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    gatewaySignature?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    subscriptionId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    paymentMethod?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gatewayOrderId?: StringNullableFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    gatewaySignature?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "transactionId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    gatewayOrderId?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    gatewaySignature?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    subscriptionId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Payment"> | string
    paymentMethod?: EnumPaymentMethodNullableWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewaySignature?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    adminId?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    mobileNumber?: StringFilter<"Member"> | string
    email?: StringNullableFilter<"Member"> | string | null
    gender?: EnumGenderNullableFilter<"Member"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableFilter<"Member"> | Date | string | null
    address?: StringNullableFilter<"Member"> | string | null
    city?: StringNullableFilter<"Member"> | string | null
    state?: StringNullableFilter<"Member"> | string | null
    pincode?: StringNullableFilter<"Member"> | string | null
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: MembershipListRelationFilter
    payments?: MemberPaymentListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
    memberships?: MembershipOrderByRelationAggregateInput
    payments?: MemberPaymentOrderByRelationAggregateInput
    _relevance?: MemberOrderByRelevanceInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    adminId?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    mobileNumber?: StringFilter<"Member"> | string
    email?: StringNullableFilter<"Member"> | string | null
    gender?: EnumGenderNullableFilter<"Member"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableFilter<"Member"> | Date | string | null
    address?: StringNullableFilter<"Member"> | string | null
    city?: StringNullableFilter<"Member"> | string | null
    state?: StringNullableFilter<"Member"> | string | null
    pincode?: StringNullableFilter<"Member"> | string | null
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: MembershipListRelationFilter
    payments?: MemberPaymentListRelationFilter
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    adminId?: StringWithAggregatesFilter<"Member"> | string
    name?: StringWithAggregatesFilter<"Member"> | string
    mobileNumber?: StringWithAggregatesFilter<"Member"> | string
    email?: StringNullableWithAggregatesFilter<"Member"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Member"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"Member"> | string | null
    city?: StringNullableWithAggregatesFilter<"Member"> | string | null
    state?: StringNullableWithAggregatesFilter<"Member"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"Member"> | string | null
    status?: EnumMemberStatusWithAggregatesFilter<"Member"> | $Enums.MemberStatus
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type MembershipPlanWhereInput = {
    AND?: MembershipPlanWhereInput | MembershipPlanWhereInput[]
    OR?: MembershipPlanWhereInput[]
    NOT?: MembershipPlanWhereInput | MembershipPlanWhereInput[]
    id?: StringFilter<"MembershipPlan"> | string
    adminId?: StringFilter<"MembershipPlan"> | string
    name?: StringFilter<"MembershipPlan"> | string
    description?: StringNullableFilter<"MembershipPlan"> | string | null
    price?: DecimalFilter<"MembershipPlan"> | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFilter<"MembershipPlan"> | number
    features?: JsonNullableFilter<"MembershipPlan">
    status?: EnumPlanStatusFilter<"MembershipPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: MembershipListRelationFilter
  }

  export type MembershipPlanOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    durationInDays?: SortOrder
    features?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
    memberships?: MembershipOrderByRelationAggregateInput
    _relevance?: MembershipPlanOrderByRelevanceInput
  }

  export type MembershipPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembershipPlanWhereInput | MembershipPlanWhereInput[]
    OR?: MembershipPlanWhereInput[]
    NOT?: MembershipPlanWhereInput | MembershipPlanWhereInput[]
    adminId?: StringFilter<"MembershipPlan"> | string
    name?: StringFilter<"MembershipPlan"> | string
    description?: StringNullableFilter<"MembershipPlan"> | string | null
    price?: DecimalFilter<"MembershipPlan"> | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFilter<"MembershipPlan"> | number
    features?: JsonNullableFilter<"MembershipPlan">
    status?: EnumPlanStatusFilter<"MembershipPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: MembershipListRelationFilter
  }, "id">

  export type MembershipPlanOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    durationInDays?: SortOrder
    features?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembershipPlanCountOrderByAggregateInput
    _avg?: MembershipPlanAvgOrderByAggregateInput
    _max?: MembershipPlanMaxOrderByAggregateInput
    _min?: MembershipPlanMinOrderByAggregateInput
    _sum?: MembershipPlanSumOrderByAggregateInput
  }

  export type MembershipPlanScalarWhereWithAggregatesInput = {
    AND?: MembershipPlanScalarWhereWithAggregatesInput | MembershipPlanScalarWhereWithAggregatesInput[]
    OR?: MembershipPlanScalarWhereWithAggregatesInput[]
    NOT?: MembershipPlanScalarWhereWithAggregatesInput | MembershipPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MembershipPlan"> | string
    adminId?: StringWithAggregatesFilter<"MembershipPlan"> | string
    name?: StringWithAggregatesFilter<"MembershipPlan"> | string
    description?: StringNullableWithAggregatesFilter<"MembershipPlan"> | string | null
    price?: DecimalWithAggregatesFilter<"MembershipPlan"> | Decimal | DecimalJsLike | number | string
    durationInDays?: IntWithAggregatesFilter<"MembershipPlan"> | number
    features?: JsonNullableWithAggregatesFilter<"MembershipPlan">
    status?: EnumPlanStatusWithAggregatesFilter<"MembershipPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeWithAggregatesFilter<"MembershipPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MembershipPlan"> | Date | string
  }

  export type MembershipWhereInput = {
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    id?: StringFilter<"Membership"> | string
    memberId?: StringFilter<"Membership"> | string
    membershipPlanId?: StringFilter<"Membership"> | string
    membershipName?: StringFilter<"Membership"> | string
    amount?: DecimalFilter<"Membership"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"Membership"> | Date | string
    endDate?: DateTimeFilter<"Membership"> | Date | string
    status?: EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    membershipPlan?: XOR<MembershipPlanScalarRelationFilter, MembershipPlanWhereInput>
    payments?: MemberPaymentListRelationFilter
  }

  export type MembershipOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    membershipPlanId?: SortOrder
    membershipName?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    membershipPlan?: MembershipPlanOrderByWithRelationInput
    payments?: MemberPaymentOrderByRelationAggregateInput
    _relevance?: MembershipOrderByRelevanceInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    memberId?: StringFilter<"Membership"> | string
    membershipPlanId?: StringFilter<"Membership"> | string
    membershipName?: StringFilter<"Membership"> | string
    amount?: DecimalFilter<"Membership"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"Membership"> | Date | string
    endDate?: DateTimeFilter<"Membership"> | Date | string
    status?: EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    membershipPlan?: XOR<MembershipPlanScalarRelationFilter, MembershipPlanWhereInput>
    payments?: MemberPaymentListRelationFilter
  }, "id">

  export type MembershipOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    membershipPlanId?: SortOrder
    membershipName?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _avg?: MembershipAvgOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
    _sum?: MembershipSumOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Membership"> | string
    memberId?: StringWithAggregatesFilter<"Membership"> | string
    membershipPlanId?: StringWithAggregatesFilter<"Membership"> | string
    membershipName?: StringWithAggregatesFilter<"Membership"> | string
    amount?: DecimalWithAggregatesFilter<"Membership"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    status?: EnumMembershipStatusWithAggregatesFilter<"Membership"> | $Enums.MembershipStatus
    createdAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
  }

  export type MemberPaymentWhereInput = {
    AND?: MemberPaymentWhereInput | MemberPaymentWhereInput[]
    OR?: MemberPaymentWhereInput[]
    NOT?: MemberPaymentWhereInput | MemberPaymentWhereInput[]
    id?: StringFilter<"MemberPayment"> | string
    adminId?: StringFilter<"MemberPayment"> | string
    memberId?: StringFilter<"MemberPayment"> | string
    membershipId?: StringNullableFilter<"MemberPayment"> | string | null
    amount?: DecimalFilter<"MemberPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"MemberPayment"> | string
    paymentMethod?: EnumPaymentMethodNullableFilter<"MemberPayment"> | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFilter<"MemberPayment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"MemberPayment"> | string | null
    notes?: StringNullableFilter<"MemberPayment"> | string | null
    paidAt?: DateTimeNullableFilter<"MemberPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"MemberPayment"> | Date | string
    updatedAt?: DateTimeFilter<"MemberPayment"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    membership?: XOR<MembershipNullableScalarRelationFilter, MembershipWhereInput> | null
  }

  export type MemberPaymentOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    memberId?: SortOrder
    membershipId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
    membership?: MembershipOrderByWithRelationInput
    _relevance?: MemberPaymentOrderByRelevanceInput
  }

  export type MemberPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: MemberPaymentWhereInput | MemberPaymentWhereInput[]
    OR?: MemberPaymentWhereInput[]
    NOT?: MemberPaymentWhereInput | MemberPaymentWhereInput[]
    adminId?: StringFilter<"MemberPayment"> | string
    memberId?: StringFilter<"MemberPayment"> | string
    membershipId?: StringNullableFilter<"MemberPayment"> | string | null
    amount?: DecimalFilter<"MemberPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"MemberPayment"> | string
    paymentMethod?: EnumPaymentMethodNullableFilter<"MemberPayment"> | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFilter<"MemberPayment"> | $Enums.PaymentStatus
    notes?: StringNullableFilter<"MemberPayment"> | string | null
    paidAt?: DateTimeNullableFilter<"MemberPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"MemberPayment"> | Date | string
    updatedAt?: DateTimeFilter<"MemberPayment"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    membership?: XOR<MembershipNullableScalarRelationFilter, MembershipWhereInput> | null
  }, "id" | "transactionId">

  export type MemberPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    memberId?: SortOrder
    membershipId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberPaymentCountOrderByAggregateInput
    _avg?: MemberPaymentAvgOrderByAggregateInput
    _max?: MemberPaymentMaxOrderByAggregateInput
    _min?: MemberPaymentMinOrderByAggregateInput
    _sum?: MemberPaymentSumOrderByAggregateInput
  }

  export type MemberPaymentScalarWhereWithAggregatesInput = {
    AND?: MemberPaymentScalarWhereWithAggregatesInput | MemberPaymentScalarWhereWithAggregatesInput[]
    OR?: MemberPaymentScalarWhereWithAggregatesInput[]
    NOT?: MemberPaymentScalarWhereWithAggregatesInput | MemberPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemberPayment"> | string
    adminId?: StringWithAggregatesFilter<"MemberPayment"> | string
    memberId?: StringWithAggregatesFilter<"MemberPayment"> | string
    membershipId?: StringNullableWithAggregatesFilter<"MemberPayment"> | string | null
    amount?: DecimalWithAggregatesFilter<"MemberPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"MemberPayment"> | string
    paymentMethod?: EnumPaymentMethodNullableWithAggregatesFilter<"MemberPayment"> | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusWithAggregatesFilter<"MemberPayment"> | $Enums.PaymentStatus
    transactionId?: StringNullableWithAggregatesFilter<"MemberPayment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"MemberPayment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"MemberPayment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MemberPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MemberPayment"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    adminId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    username?: StringNullableFilter<"Staff"> | string | null
    email?: StringNullableFilter<"Staff"> | string | null
    mobileNumber?: StringFilter<"Staff"> | string
    passwordHash?: StringNullableFilter<"Staff"> | string | null
    staffType?: EnumStaffTypeFilter<"Staff"> | $Enums.StaffType
    designation?: StringNullableFilter<"Staff"> | string | null
    address?: StringNullableFilter<"Staff"> | string | null
    city?: StringNullableFilter<"Staff"> | string | null
    state?: StringNullableFilter<"Staff"> | string | null
    pincode?: StringNullableFilter<"Staff"> | string | null
    status?: EnumStaffStatusFilter<"Staff"> | $Enums.StaffStatus
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    attendances?: StaffAttendanceListRelationFilter
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    mobileNumber?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    staffType?: SortOrder
    designation?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendances?: StaffAttendanceOrderByRelationAggregateInput
    admin?: UserOrderByWithRelationInput
    _relevance?: StaffOrderByRelevanceInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    adminId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    mobileNumber?: StringFilter<"Staff"> | string
    passwordHash?: StringNullableFilter<"Staff"> | string | null
    staffType?: EnumStaffTypeFilter<"Staff"> | $Enums.StaffType
    designation?: StringNullableFilter<"Staff"> | string | null
    address?: StringNullableFilter<"Staff"> | string | null
    city?: StringNullableFilter<"Staff"> | string | null
    state?: StringNullableFilter<"Staff"> | string | null
    pincode?: StringNullableFilter<"Staff"> | string | null
    status?: EnumStaffStatusFilter<"Staff"> | $Enums.StaffStatus
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    attendances?: StaffAttendanceListRelationFilter
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "username" | "email">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    mobileNumber?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    staffType?: SortOrder
    designation?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    adminId?: StringWithAggregatesFilter<"Staff"> | string
    name?: StringWithAggregatesFilter<"Staff"> | string
    username?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    email?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    mobileNumber?: StringWithAggregatesFilter<"Staff"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    staffType?: EnumStaffTypeWithAggregatesFilter<"Staff"> | $Enums.StaffType
    designation?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    address?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    city?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    state?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    status?: EnumStaffStatusWithAggregatesFilter<"Staff"> | $Enums.StaffStatus
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type StaffAttendanceWhereInput = {
    AND?: StaffAttendanceWhereInput | StaffAttendanceWhereInput[]
    OR?: StaffAttendanceWhereInput[]
    NOT?: StaffAttendanceWhereInput | StaffAttendanceWhereInput[]
    id?: StringFilter<"StaffAttendance"> | string
    adminId?: StringFilter<"StaffAttendance"> | string
    staffId?: StringFilter<"StaffAttendance"> | string
    attendanceDate?: DateTimeFilter<"StaffAttendance"> | Date | string
    checkIn?: DateTimeNullableFilter<"StaffAttendance"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"StaffAttendance"> | Date | string | null
    status?: EnumAttendanceStatusFilter<"StaffAttendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"StaffAttendance"> | string | null
    createdAt?: DateTimeFilter<"StaffAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAttendance"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }

  export type StaffAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    staffId?: SortOrder
    attendanceDate?: SortOrder
    checkIn?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
    staff?: StaffOrderByWithRelationInput
    _relevance?: StaffAttendanceOrderByRelevanceInput
  }

  export type StaffAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    staffId_attendanceDate?: StaffAttendanceStaffIdAttendanceDateCompoundUniqueInput
    AND?: StaffAttendanceWhereInput | StaffAttendanceWhereInput[]
    OR?: StaffAttendanceWhereInput[]
    NOT?: StaffAttendanceWhereInput | StaffAttendanceWhereInput[]
    adminId?: StringFilter<"StaffAttendance"> | string
    staffId?: StringFilter<"StaffAttendance"> | string
    attendanceDate?: DateTimeFilter<"StaffAttendance"> | Date | string
    checkIn?: DateTimeNullableFilter<"StaffAttendance"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"StaffAttendance"> | Date | string | null
    status?: EnumAttendanceStatusFilter<"StaffAttendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"StaffAttendance"> | string | null
    createdAt?: DateTimeFilter<"StaffAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAttendance"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }, "id" | "staffId_attendanceDate">

  export type StaffAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    staffId?: SortOrder
    attendanceDate?: SortOrder
    checkIn?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffAttendanceCountOrderByAggregateInput
    _max?: StaffAttendanceMaxOrderByAggregateInput
    _min?: StaffAttendanceMinOrderByAggregateInput
  }

  export type StaffAttendanceScalarWhereWithAggregatesInput = {
    AND?: StaffAttendanceScalarWhereWithAggregatesInput | StaffAttendanceScalarWhereWithAggregatesInput[]
    OR?: StaffAttendanceScalarWhereWithAggregatesInput[]
    NOT?: StaffAttendanceScalarWhereWithAggregatesInput | StaffAttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffAttendance"> | string
    adminId?: StringWithAggregatesFilter<"StaffAttendance"> | string
    staffId?: StringWithAggregatesFilter<"StaffAttendance"> | string
    attendanceDate?: DateTimeWithAggregatesFilter<"StaffAttendance"> | Date | string
    checkIn?: DateTimeNullableWithAggregatesFilter<"StaffAttendance"> | Date | string | null
    checkOut?: DateTimeNullableWithAggregatesFilter<"StaffAttendance"> | Date | string | null
    status?: EnumAttendanceStatusWithAggregatesFilter<"StaffAttendance"> | $Enums.AttendanceStatus
    notes?: StringNullableWithAggregatesFilter<"StaffAttendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StaffAttendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffAttendance"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    business?: BusinessCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCreateInput = {
    id?: string
    businessName: string
    businessType: $Enums.BusinessType
    mobileNumber: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: string
    userId: string
    businessName: string
    businessType: $Enums.BusinessType
    mobileNumber: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCreateManyInput = {
    id?: string
    userId: string
    businessName: string
    businessType: $Enums.BusinessType
    mobileNumber: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingInterval: $Enums.BillingInterval
    durationInDays: number
    maxMembers?: number | null
    maxStaff?: number | null
    maxBusinesses?: number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingInterval: $Enums.BillingInterval
    durationInDays: number
    maxMembers?: number | null
    maxStaff?: number | null
    maxBusinesses?: number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingInterval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    durationInDays?: IntFieldUpdateOperationsInput | number
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxBusinesses?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingInterval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    durationInDays?: IntFieldUpdateOperationsInput | number
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxBusinesses?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingInterval: $Enums.BillingInterval
    durationInDays: number
    maxMembers?: number | null
    maxStaff?: number | null
    maxBusinesses?: number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingInterval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    durationInDays?: IntFieldUpdateOperationsInput | number
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxBusinesses?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingInterval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    durationInDays?: IntFieldUpdateOperationsInput | number
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxBusinesses?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    user: UserCreateNestedOneWithoutSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    planId: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    planId: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    subscriptionId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    subscriptionId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutMembersInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: MemberPaymentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    adminId: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: MemberPaymentUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutMembersNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: MemberPaymentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: MemberPaymentUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    adminId: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipPlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationInDays: number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutMembershipPlansInput
    memberships?: MembershipCreateNestedManyWithoutMembershipPlanInput
  }

  export type MembershipPlanUncheckedCreateInput = {
    id?: string
    adminId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationInDays: number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMembershipPlanInput
  }

  export type MembershipPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFieldUpdateOperationsInput | number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutMembershipPlansNestedInput
    memberships?: MembershipUpdateManyWithoutMembershipPlanNestedInput
  }

  export type MembershipPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFieldUpdateOperationsInput | number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutMembershipPlanNestedInput
  }

  export type MembershipPlanCreateManyInput = {
    id?: string
    adminId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationInDays: number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFieldUpdateOperationsInput | number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFieldUpdateOperationsInput | number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateInput = {
    id?: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutMembershipsInput
    membershipPlan: MembershipPlanCreateNestedOneWithoutMembershipsInput
    payments?: MemberPaymentCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateInput = {
    id?: string
    memberId: string
    membershipPlanId: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: MemberPaymentUncheckedCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    membershipPlan?: MembershipPlanUpdateOneRequiredWithoutMembershipsNestedInput
    payments?: MemberPaymentUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: MemberPaymentUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipCreateManyInput = {
    id?: string
    memberId: string
    membershipPlanId: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutMemberPaymentsInput
    member: MemberCreateNestedOneWithoutPaymentsInput
    membership?: MembershipCreateNestedOneWithoutPaymentsInput
  }

  export type MemberPaymentUncheckedCreateInput = {
    id?: string
    adminId: string
    memberId: string
    membershipId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutMemberPaymentsNestedInput
    member?: MemberUpdateOneRequiredWithoutPaymentsNestedInput
    membership?: MembershipUpdateOneWithoutPaymentsNestedInput
  }

  export type MemberPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    membershipId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentCreateManyInput = {
    id?: string
    adminId: string
    memberId: string
    membershipId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    membershipId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    id?: string
    name: string
    username?: string | null
    email?: string | null
    mobileNumber: string
    passwordHash?: string | null
    staffType: $Enums.StaffType
    designation?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.StaffStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: StaffAttendanceCreateNestedManyWithoutStaffInput
    admin: UserCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    adminId: string
    name: string
    username?: string | null
    email?: string | null
    mobileNumber: string
    passwordHash?: string | null
    staffType: $Enums.StaffType
    designation?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.StaffStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: StaffAttendanceUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    staffType?: EnumStaffTypeFieldUpdateOperationsInput | $Enums.StaffType
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStaffStatusFieldUpdateOperationsInput | $Enums.StaffStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: StaffAttendanceUpdateManyWithoutStaffNestedInput
    admin?: UserUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    staffType?: EnumStaffTypeFieldUpdateOperationsInput | $Enums.StaffType
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStaffStatusFieldUpdateOperationsInput | $Enums.StaffStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: StaffAttendanceUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    id?: string
    adminId: string
    name: string
    username?: string | null
    email?: string | null
    mobileNumber: string
    passwordHash?: string | null
    staffType: $Enums.StaffType
    designation?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.StaffStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    staffType?: EnumStaffTypeFieldUpdateOperationsInput | $Enums.StaffType
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStaffStatusFieldUpdateOperationsInput | $Enums.StaffStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    staffType?: EnumStaffTypeFieldUpdateOperationsInput | $Enums.StaffType
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStaffStatusFieldUpdateOperationsInput | $Enums.StaffStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAttendanceCreateInput = {
    id?: string
    attendanceDate: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutStaffAttendancesInput
    staff: StaffCreateNestedOneWithoutAttendancesInput
  }

  export type StaffAttendanceUncheckedCreateInput = {
    id?: string
    adminId: string
    staffId: string
    attendanceDate: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutStaffAttendancesNestedInput
    staff?: StaffUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type StaffAttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAttendanceCreateManyInput = {
    id?: string
    adminId: string
    staffId: string
    attendanceDate: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type BusinessNullableScalarRelationFilter = {
    is?: BusinessWhereInput | null
    isNot?: BusinessWhereInput | null
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type StaffAttendanceListRelationFilter = {
    every?: StaffAttendanceWhereInput
    some?: StaffAttendanceWhereInput
    none?: StaffAttendanceWhereInput
  }

  export type MembershipPlanListRelationFilter = {
    every?: MembershipPlanWhereInput
    some?: MembershipPlanWhereInput
    none?: MembershipPlanWhereInput
  }

  export type MemberPaymentListRelationFilter = {
    every?: MemberPaymentWhereInput
    some?: MemberPaymentWhereInput
    none?: MemberPaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    encryptedPassword?: SortOrder
    role?: SortOrder
    status?: SortOrder
    parentId?: SortOrder
    isFirstLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    encryptedPassword?: SortOrder
    role?: SortOrder
    status?: SortOrder
    parentId?: SortOrder
    isFirstLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    encryptedPassword?: SortOrder
    role?: SortOrder
    status?: SortOrder
    parentId?: SortOrder
    isFirstLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumBusinessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[]
    notIn?: $Enums.BusinessType[]
    not?: NestedEnumBusinessTypeFilter<$PrismaModel> | $Enums.BusinessType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BusinessOrderByRelevanceInput = {
    fields: BusinessOrderByRelevanceFieldEnum | BusinessOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBusinessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[]
    notIn?: $Enums.BusinessType[]
    not?: NestedEnumBusinessTypeWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumBillingIntervalFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.BillingInterval[]
    notIn?: $Enums.BillingInterval[]
    not?: NestedEnumBillingIntervalFilter<$PrismaModel> | $Enums.BillingInterval
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[]
    notIn?: $Enums.PlanStatus[]
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type PlanOrderByRelevanceInput = {
    fields: PlanOrderByRelevanceFieldEnum | PlanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    billingInterval?: SortOrder
    durationInDays?: SortOrder
    maxMembers?: SortOrder
    maxStaff?: SortOrder
    maxBusinesses?: SortOrder
    features?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    price?: SortOrder
    durationInDays?: SortOrder
    maxMembers?: SortOrder
    maxStaff?: SortOrder
    maxBusinesses?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    billingInterval?: SortOrder
    durationInDays?: SortOrder
    maxMembers?: SortOrder
    maxStaff?: SortOrder
    maxBusinesses?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    billingInterval?: SortOrder
    durationInDays?: SortOrder
    maxMembers?: SortOrder
    maxStaff?: SortOrder
    maxBusinesses?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    price?: SortOrder
    durationInDays?: SortOrder
    maxMembers?: SortOrder
    maxStaff?: SortOrder
    maxBusinesses?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumBillingIntervalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.BillingInterval[]
    notIn?: $Enums.BillingInterval[]
    not?: NestedEnumBillingIntervalWithAggregatesFilter<$PrismaModel> | $Enums.BillingInterval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingIntervalFilter<$PrismaModel>
    _max?: NestedEnumBillingIntervalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[]
    notIn?: $Enums.PlanStatus[]
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type SubscriptionOrderByRelevanceInput = {
    fields: SubscriptionOrderByRelevanceFieldEnum | SubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    paymentRequired?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    paymentRequired?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    paymentRequired?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | null
    notIn?: $Enums.PaymentMethod[] | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    gatewaySignature?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    gatewaySignature?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    gatewaySignature?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | null
    notIn?: $Enums.PaymentMethod[] | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[]
    notIn?: $Enums.MemberStatus[]
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelevanceInput = {
    fields: MemberOrderByRelevanceFieldEnum | MemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[]
    notIn?: $Enums.MemberStatus[]
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type MembershipPlanOrderByRelevanceInput = {
    fields: MembershipPlanOrderByRelevanceFieldEnum | MembershipPlanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MembershipPlanCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationInDays?: SortOrder
    features?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipPlanAvgOrderByAggregateInput = {
    price?: SortOrder
    durationInDays?: SortOrder
  }

  export type MembershipPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationInDays?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipPlanMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationInDays?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipPlanSumOrderByAggregateInput = {
    price?: SortOrder
    durationInDays?: SortOrder
  }

  export type EnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[]
    notIn?: $Enums.MembershipStatus[]
    not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type MembershipPlanScalarRelationFilter = {
    is?: MembershipPlanWhereInput
    isNot?: MembershipPlanWhereInput
  }

  export type MembershipOrderByRelevanceInput = {
    fields: MembershipOrderByRelevanceFieldEnum | MembershipOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MembershipCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    membershipPlanId?: SortOrder
    membershipName?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    membershipPlanId?: SortOrder
    membershipName?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    membershipPlanId?: SortOrder
    membershipName?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[]
    notIn?: $Enums.MembershipStatus[]
    not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
    _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
  }

  export type MembershipNullableScalarRelationFilter = {
    is?: MembershipWhereInput | null
    isNot?: MembershipWhereInput | null
  }

  export type MemberPaymentOrderByRelevanceInput = {
    fields: MemberPaymentOrderByRelevanceFieldEnum | MemberPaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    memberId?: SortOrder
    membershipId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    notes?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type MemberPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    memberId?: SortOrder
    membershipId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    notes?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    memberId?: SortOrder
    membershipId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    notes?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumStaffTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffType | EnumStaffTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StaffType[]
    notIn?: $Enums.StaffType[]
    not?: NestedEnumStaffTypeFilter<$PrismaModel> | $Enums.StaffType
  }

  export type EnumStaffStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffStatus | EnumStaffStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StaffStatus[]
    notIn?: $Enums.StaffStatus[]
    not?: NestedEnumStaffStatusFilter<$PrismaModel> | $Enums.StaffStatus
  }

  export type StaffOrderByRelevanceInput = {
    fields: StaffOrderByRelevanceFieldEnum | StaffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    passwordHash?: SortOrder
    staffType?: SortOrder
    designation?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    passwordHash?: SortOrder
    staffType?: SortOrder
    designation?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    passwordHash?: SortOrder
    staffType?: SortOrder
    designation?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStaffTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffType | EnumStaffTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StaffType[]
    notIn?: $Enums.StaffType[]
    not?: NestedEnumStaffTypeWithAggregatesFilter<$PrismaModel> | $Enums.StaffType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffTypeFilter<$PrismaModel>
    _max?: NestedEnumStaffTypeFilter<$PrismaModel>
  }

  export type EnumStaffStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffStatus | EnumStaffStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StaffStatus[]
    notIn?: $Enums.StaffStatus[]
    not?: NestedEnumStaffStatusWithAggregatesFilter<$PrismaModel> | $Enums.StaffStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffStatusFilter<$PrismaModel>
    _max?: NestedEnumStaffStatusFilter<$PrismaModel>
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type StaffAttendanceOrderByRelevanceInput = {
    fields: StaffAttendanceOrderByRelevanceFieldEnum | StaffAttendanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StaffAttendanceStaffIdAttendanceDateCompoundUniqueInput = {
    staffId: string
    attendanceDate: Date | string
  }

  export type StaffAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    staffId?: SortOrder
    attendanceDate?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    staffId?: SortOrder
    attendanceDate?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    staffId?: SortOrder
    attendanceDate?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutChildrenInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BusinessCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    connect?: BusinessWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MemberCreateNestedManyWithoutAdminInput = {
    create?: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput> | MemberCreateWithoutAdminInput[] | MemberUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutAdminInput | MemberCreateOrConnectWithoutAdminInput[]
    createMany?: MemberCreateManyAdminInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type StaffCreateNestedManyWithoutAdminInput = {
    create?: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput> | StaffCreateWithoutAdminInput[] | StaffUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAdminInput | StaffCreateOrConnectWithoutAdminInput[]
    createMany?: StaffCreateManyAdminInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type StaffAttendanceCreateNestedManyWithoutAdminInput = {
    create?: XOR<StaffAttendanceCreateWithoutAdminInput, StaffAttendanceUncheckedCreateWithoutAdminInput> | StaffAttendanceCreateWithoutAdminInput[] | StaffAttendanceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffAttendanceCreateOrConnectWithoutAdminInput | StaffAttendanceCreateOrConnectWithoutAdminInput[]
    createMany?: StaffAttendanceCreateManyAdminInputEnvelope
    connect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
  }

  export type MembershipPlanCreateNestedManyWithoutAdminInput = {
    create?: XOR<MembershipPlanCreateWithoutAdminInput, MembershipPlanUncheckedCreateWithoutAdminInput> | MembershipPlanCreateWithoutAdminInput[] | MembershipPlanUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutAdminInput | MembershipPlanCreateOrConnectWithoutAdminInput[]
    createMany?: MembershipPlanCreateManyAdminInputEnvelope
    connect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
  }

  export type MemberPaymentCreateNestedManyWithoutAdminInput = {
    create?: XOR<MemberPaymentCreateWithoutAdminInput, MemberPaymentUncheckedCreateWithoutAdminInput> | MemberPaymentCreateWithoutAdminInput[] | MemberPaymentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutAdminInput | MemberPaymentCreateOrConnectWithoutAdminInput[]
    createMany?: MemberPaymentCreateManyAdminInputEnvelope
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BusinessUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    connect?: BusinessWhereUniqueInput
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput> | MemberCreateWithoutAdminInput[] | MemberUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutAdminInput | MemberCreateOrConnectWithoutAdminInput[]
    createMany?: MemberCreateManyAdminInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput> | StaffCreateWithoutAdminInput[] | StaffUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAdminInput | StaffCreateOrConnectWithoutAdminInput[]
    createMany?: StaffCreateManyAdminInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<StaffAttendanceCreateWithoutAdminInput, StaffAttendanceUncheckedCreateWithoutAdminInput> | StaffAttendanceCreateWithoutAdminInput[] | StaffAttendanceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffAttendanceCreateOrConnectWithoutAdminInput | StaffAttendanceCreateOrConnectWithoutAdminInput[]
    createMany?: StaffAttendanceCreateManyAdminInputEnvelope
    connect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
  }

  export type MembershipPlanUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<MembershipPlanCreateWithoutAdminInput, MembershipPlanUncheckedCreateWithoutAdminInput> | MembershipPlanCreateWithoutAdminInput[] | MembershipPlanUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutAdminInput | MembershipPlanCreateOrConnectWithoutAdminInput[]
    createMany?: MembershipPlanCreateManyAdminInputEnvelope
    connect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
  }

  export type MemberPaymentUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<MemberPaymentCreateWithoutAdminInput, MemberPaymentUncheckedCreateWithoutAdminInput> | MemberPaymentCreateWithoutAdminInput[] | MemberPaymentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutAdminInput | MemberPaymentCreateOrConnectWithoutAdminInput[]
    createMany?: MemberPaymentCreateManyAdminInputEnvelope
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    upsert?: UserUpsertWithoutChildrenInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChildrenInput, UserUpdateWithoutChildrenInput>, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BusinessUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    upsert?: BusinessUpsertWithoutUserInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutUserInput, BusinessUpdateWithoutUserInput>, BusinessUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MemberUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput> | MemberCreateWithoutAdminInput[] | MemberUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutAdminInput | MemberCreateOrConnectWithoutAdminInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutAdminInput | MemberUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MemberCreateManyAdminInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutAdminInput | MemberUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutAdminInput | MemberUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type StaffUpdateManyWithoutAdminNestedInput = {
    create?: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput> | StaffCreateWithoutAdminInput[] | StaffUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAdminInput | StaffCreateOrConnectWithoutAdminInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutAdminInput | StaffUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: StaffCreateManyAdminInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutAdminInput | StaffUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutAdminInput | StaffUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type StaffAttendanceUpdateManyWithoutAdminNestedInput = {
    create?: XOR<StaffAttendanceCreateWithoutAdminInput, StaffAttendanceUncheckedCreateWithoutAdminInput> | StaffAttendanceCreateWithoutAdminInput[] | StaffAttendanceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffAttendanceCreateOrConnectWithoutAdminInput | StaffAttendanceCreateOrConnectWithoutAdminInput[]
    upsert?: StaffAttendanceUpsertWithWhereUniqueWithoutAdminInput | StaffAttendanceUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: StaffAttendanceCreateManyAdminInputEnvelope
    set?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    disconnect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    delete?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    connect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    update?: StaffAttendanceUpdateWithWhereUniqueWithoutAdminInput | StaffAttendanceUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: StaffAttendanceUpdateManyWithWhereWithoutAdminInput | StaffAttendanceUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: StaffAttendanceScalarWhereInput | StaffAttendanceScalarWhereInput[]
  }

  export type MembershipPlanUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MembershipPlanCreateWithoutAdminInput, MembershipPlanUncheckedCreateWithoutAdminInput> | MembershipPlanCreateWithoutAdminInput[] | MembershipPlanUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutAdminInput | MembershipPlanCreateOrConnectWithoutAdminInput[]
    upsert?: MembershipPlanUpsertWithWhereUniqueWithoutAdminInput | MembershipPlanUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MembershipPlanCreateManyAdminInputEnvelope
    set?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    disconnect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    delete?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    connect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    update?: MembershipPlanUpdateWithWhereUniqueWithoutAdminInput | MembershipPlanUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MembershipPlanUpdateManyWithWhereWithoutAdminInput | MembershipPlanUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MembershipPlanScalarWhereInput | MembershipPlanScalarWhereInput[]
  }

  export type MemberPaymentUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MemberPaymentCreateWithoutAdminInput, MemberPaymentUncheckedCreateWithoutAdminInput> | MemberPaymentCreateWithoutAdminInput[] | MemberPaymentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutAdminInput | MemberPaymentCreateOrConnectWithoutAdminInput[]
    upsert?: MemberPaymentUpsertWithWhereUniqueWithoutAdminInput | MemberPaymentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MemberPaymentCreateManyAdminInputEnvelope
    set?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    disconnect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    delete?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    update?: MemberPaymentUpdateWithWhereUniqueWithoutAdminInput | MemberPaymentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MemberPaymentUpdateManyWithWhereWithoutAdminInput | MemberPaymentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MemberPaymentScalarWhereInput | MemberPaymentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BusinessUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    upsert?: BusinessUpsertWithoutUserInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutUserInput, BusinessUpdateWithoutUserInput>, BusinessUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput> | MemberCreateWithoutAdminInput[] | MemberUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutAdminInput | MemberCreateOrConnectWithoutAdminInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutAdminInput | MemberUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MemberCreateManyAdminInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutAdminInput | MemberUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutAdminInput | MemberUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput> | StaffCreateWithoutAdminInput[] | StaffUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAdminInput | StaffCreateOrConnectWithoutAdminInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutAdminInput | StaffUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: StaffCreateManyAdminInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutAdminInput | StaffUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutAdminInput | StaffUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<StaffAttendanceCreateWithoutAdminInput, StaffAttendanceUncheckedCreateWithoutAdminInput> | StaffAttendanceCreateWithoutAdminInput[] | StaffAttendanceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffAttendanceCreateOrConnectWithoutAdminInput | StaffAttendanceCreateOrConnectWithoutAdminInput[]
    upsert?: StaffAttendanceUpsertWithWhereUniqueWithoutAdminInput | StaffAttendanceUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: StaffAttendanceCreateManyAdminInputEnvelope
    set?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    disconnect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    delete?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    connect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    update?: StaffAttendanceUpdateWithWhereUniqueWithoutAdminInput | StaffAttendanceUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: StaffAttendanceUpdateManyWithWhereWithoutAdminInput | StaffAttendanceUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: StaffAttendanceScalarWhereInput | StaffAttendanceScalarWhereInput[]
  }

  export type MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MembershipPlanCreateWithoutAdminInput, MembershipPlanUncheckedCreateWithoutAdminInput> | MembershipPlanCreateWithoutAdminInput[] | MembershipPlanUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutAdminInput | MembershipPlanCreateOrConnectWithoutAdminInput[]
    upsert?: MembershipPlanUpsertWithWhereUniqueWithoutAdminInput | MembershipPlanUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MembershipPlanCreateManyAdminInputEnvelope
    set?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    disconnect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    delete?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    connect?: MembershipPlanWhereUniqueInput | MembershipPlanWhereUniqueInput[]
    update?: MembershipPlanUpdateWithWhereUniqueWithoutAdminInput | MembershipPlanUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MembershipPlanUpdateManyWithWhereWithoutAdminInput | MembershipPlanUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MembershipPlanScalarWhereInput | MembershipPlanScalarWhereInput[]
  }

  export type MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MemberPaymentCreateWithoutAdminInput, MemberPaymentUncheckedCreateWithoutAdminInput> | MemberPaymentCreateWithoutAdminInput[] | MemberPaymentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutAdminInput | MemberPaymentCreateOrConnectWithoutAdminInput[]
    upsert?: MemberPaymentUpsertWithWhereUniqueWithoutAdminInput | MemberPaymentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MemberPaymentCreateManyAdminInputEnvelope
    set?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    disconnect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    delete?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    update?: MemberPaymentUpdateWithWhereUniqueWithoutAdminInput | MemberPaymentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MemberPaymentUpdateManyWithWhereWithoutAdminInput | MemberPaymentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MemberPaymentScalarWhereInput | MemberPaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBusinessInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBusinessTypeFieldUpdateOperationsInput = {
    set?: $Enums.BusinessType
  }

  export type UserUpdateOneRequiredWithoutBusinessNestedInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput
    upsert?: UserUpsertWithoutBusinessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusinessInput, UserUpdateWithoutBusinessInput>, UserUncheckedUpdateWithoutBusinessInput>
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumBillingIntervalFieldUpdateOperationsInput = {
    set?: $Enums.BillingInterval
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type PlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlanUpsertWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionsInput, PlanUpdateWithoutSubscriptionsInput>, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PaymentUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionUpsertWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionUpdateWithoutPaymentsInput>, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutMembersInput = {
    create?: XOR<UserCreateWithoutMembersInput, UserUncheckedCreateWithoutMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembersInput
    connect?: UserWhereUniqueInput
  }

  export type MembershipCreateNestedManyWithoutMemberInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MemberPaymentCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberPaymentCreateWithoutMemberInput, MemberPaymentUncheckedCreateWithoutMemberInput> | MemberPaymentCreateWithoutMemberInput[] | MemberPaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutMemberInput | MemberPaymentCreateOrConnectWithoutMemberInput[]
    createMany?: MemberPaymentCreateManyMemberInputEnvelope
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MemberPaymentUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberPaymentCreateWithoutMemberInput, MemberPaymentUncheckedCreateWithoutMemberInput> | MemberPaymentCreateWithoutMemberInput[] | MemberPaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutMemberInput | MemberPaymentCreateOrConnectWithoutMemberInput[]
    createMany?: MemberPaymentCreateManyMemberInputEnvelope
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type EnumMemberStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemberStatus
  }

  export type UserUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<UserCreateWithoutMembersInput, UserUncheckedCreateWithoutMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembersInput
    upsert?: UserUpsertWithoutMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembersInput, UserUpdateWithoutMembersInput>, UserUncheckedUpdateWithoutMembersInput>
  }

  export type MembershipUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutMemberInput | MembershipUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutMemberInput | MembershipUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutMemberInput | MembershipUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MemberPaymentUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberPaymentCreateWithoutMemberInput, MemberPaymentUncheckedCreateWithoutMemberInput> | MemberPaymentCreateWithoutMemberInput[] | MemberPaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutMemberInput | MemberPaymentCreateOrConnectWithoutMemberInput[]
    upsert?: MemberPaymentUpsertWithWhereUniqueWithoutMemberInput | MemberPaymentUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberPaymentCreateManyMemberInputEnvelope
    set?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    disconnect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    delete?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    update?: MemberPaymentUpdateWithWhereUniqueWithoutMemberInput | MemberPaymentUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberPaymentUpdateManyWithWhereWithoutMemberInput | MemberPaymentUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberPaymentScalarWhereInput | MemberPaymentScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutMemberInput | MembershipUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutMemberInput | MembershipUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutMemberInput | MembershipUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MemberPaymentUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberPaymentCreateWithoutMemberInput, MemberPaymentUncheckedCreateWithoutMemberInput> | MemberPaymentCreateWithoutMemberInput[] | MemberPaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutMemberInput | MemberPaymentCreateOrConnectWithoutMemberInput[]
    upsert?: MemberPaymentUpsertWithWhereUniqueWithoutMemberInput | MemberPaymentUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberPaymentCreateManyMemberInputEnvelope
    set?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    disconnect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    delete?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    update?: MemberPaymentUpdateWithWhereUniqueWithoutMemberInput | MemberPaymentUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberPaymentUpdateManyWithWhereWithoutMemberInput | MemberPaymentUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberPaymentScalarWhereInput | MemberPaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipPlansInput = {
    create?: XOR<UserCreateWithoutMembershipPlansInput, UserUncheckedCreateWithoutMembershipPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipPlansInput
    connect?: UserWhereUniqueInput
  }

  export type MembershipCreateNestedManyWithoutMembershipPlanInput = {
    create?: XOR<MembershipCreateWithoutMembershipPlanInput, MembershipUncheckedCreateWithoutMembershipPlanInput> | MembershipCreateWithoutMembershipPlanInput[] | MembershipUncheckedCreateWithoutMembershipPlanInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMembershipPlanInput | MembershipCreateOrConnectWithoutMembershipPlanInput[]
    createMany?: MembershipCreateManyMembershipPlanInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutMembershipPlanInput = {
    create?: XOR<MembershipCreateWithoutMembershipPlanInput, MembershipUncheckedCreateWithoutMembershipPlanInput> | MembershipCreateWithoutMembershipPlanInput[] | MembershipUncheckedCreateWithoutMembershipPlanInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMembershipPlanInput | MembershipCreateOrConnectWithoutMembershipPlanInput[]
    createMany?: MembershipCreateManyMembershipPlanInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMembershipPlansNestedInput = {
    create?: XOR<UserCreateWithoutMembershipPlansInput, UserUncheckedCreateWithoutMembershipPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipPlansInput
    upsert?: UserUpsertWithoutMembershipPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipPlansInput, UserUpdateWithoutMembershipPlansInput>, UserUncheckedUpdateWithoutMembershipPlansInput>
  }

  export type MembershipUpdateManyWithoutMembershipPlanNestedInput = {
    create?: XOR<MembershipCreateWithoutMembershipPlanInput, MembershipUncheckedCreateWithoutMembershipPlanInput> | MembershipCreateWithoutMembershipPlanInput[] | MembershipUncheckedCreateWithoutMembershipPlanInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMembershipPlanInput | MembershipCreateOrConnectWithoutMembershipPlanInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutMembershipPlanInput | MembershipUpsertWithWhereUniqueWithoutMembershipPlanInput[]
    createMany?: MembershipCreateManyMembershipPlanInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutMembershipPlanInput | MembershipUpdateWithWhereUniqueWithoutMembershipPlanInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutMembershipPlanInput | MembershipUpdateManyWithWhereWithoutMembershipPlanInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutMembershipPlanNestedInput = {
    create?: XOR<MembershipCreateWithoutMembershipPlanInput, MembershipUncheckedCreateWithoutMembershipPlanInput> | MembershipCreateWithoutMembershipPlanInput[] | MembershipUncheckedCreateWithoutMembershipPlanInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMembershipPlanInput | MembershipCreateOrConnectWithoutMembershipPlanInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutMembershipPlanInput | MembershipUpsertWithWhereUniqueWithoutMembershipPlanInput[]
    createMany?: MembershipCreateManyMembershipPlanInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutMembershipPlanInput | MembershipUpdateWithWhereUniqueWithoutMembershipPlanInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutMembershipPlanInput | MembershipUpdateManyWithWhereWithoutMembershipPlanInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<MemberCreateWithoutMembershipsInput, MemberUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMembershipsInput
    connect?: MemberWhereUniqueInput
  }

  export type MembershipPlanCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<MembershipPlanCreateWithoutMembershipsInput, MembershipPlanUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutMembershipsInput
    connect?: MembershipPlanWhereUniqueInput
  }

  export type MemberPaymentCreateNestedManyWithoutMembershipInput = {
    create?: XOR<MemberPaymentCreateWithoutMembershipInput, MemberPaymentUncheckedCreateWithoutMembershipInput> | MemberPaymentCreateWithoutMembershipInput[] | MemberPaymentUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutMembershipInput | MemberPaymentCreateOrConnectWithoutMembershipInput[]
    createMany?: MemberPaymentCreateManyMembershipInputEnvelope
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
  }

  export type MemberPaymentUncheckedCreateNestedManyWithoutMembershipInput = {
    create?: XOR<MemberPaymentCreateWithoutMembershipInput, MemberPaymentUncheckedCreateWithoutMembershipInput> | MemberPaymentCreateWithoutMembershipInput[] | MemberPaymentUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutMembershipInput | MemberPaymentCreateOrConnectWithoutMembershipInput[]
    createMany?: MemberPaymentCreateManyMembershipInputEnvelope
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
  }

  export type EnumMembershipStatusFieldUpdateOperationsInput = {
    set?: $Enums.MembershipStatus
  }

  export type MemberUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<MemberCreateWithoutMembershipsInput, MemberUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMembershipsInput
    upsert?: MemberUpsertWithoutMembershipsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMembershipsInput, MemberUpdateWithoutMembershipsInput>, MemberUncheckedUpdateWithoutMembershipsInput>
  }

  export type MembershipPlanUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<MembershipPlanCreateWithoutMembershipsInput, MembershipPlanUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: MembershipPlanCreateOrConnectWithoutMembershipsInput
    upsert?: MembershipPlanUpsertWithoutMembershipsInput
    connect?: MembershipPlanWhereUniqueInput
    update?: XOR<XOR<MembershipPlanUpdateToOneWithWhereWithoutMembershipsInput, MembershipPlanUpdateWithoutMembershipsInput>, MembershipPlanUncheckedUpdateWithoutMembershipsInput>
  }

  export type MemberPaymentUpdateManyWithoutMembershipNestedInput = {
    create?: XOR<MemberPaymentCreateWithoutMembershipInput, MemberPaymentUncheckedCreateWithoutMembershipInput> | MemberPaymentCreateWithoutMembershipInput[] | MemberPaymentUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutMembershipInput | MemberPaymentCreateOrConnectWithoutMembershipInput[]
    upsert?: MemberPaymentUpsertWithWhereUniqueWithoutMembershipInput | MemberPaymentUpsertWithWhereUniqueWithoutMembershipInput[]
    createMany?: MemberPaymentCreateManyMembershipInputEnvelope
    set?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    disconnect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    delete?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    update?: MemberPaymentUpdateWithWhereUniqueWithoutMembershipInput | MemberPaymentUpdateWithWhereUniqueWithoutMembershipInput[]
    updateMany?: MemberPaymentUpdateManyWithWhereWithoutMembershipInput | MemberPaymentUpdateManyWithWhereWithoutMembershipInput[]
    deleteMany?: MemberPaymentScalarWhereInput | MemberPaymentScalarWhereInput[]
  }

  export type MemberPaymentUncheckedUpdateManyWithoutMembershipNestedInput = {
    create?: XOR<MemberPaymentCreateWithoutMembershipInput, MemberPaymentUncheckedCreateWithoutMembershipInput> | MemberPaymentCreateWithoutMembershipInput[] | MemberPaymentUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: MemberPaymentCreateOrConnectWithoutMembershipInput | MemberPaymentCreateOrConnectWithoutMembershipInput[]
    upsert?: MemberPaymentUpsertWithWhereUniqueWithoutMembershipInput | MemberPaymentUpsertWithWhereUniqueWithoutMembershipInput[]
    createMany?: MemberPaymentCreateManyMembershipInputEnvelope
    set?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    disconnect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    delete?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    connect?: MemberPaymentWhereUniqueInput | MemberPaymentWhereUniqueInput[]
    update?: MemberPaymentUpdateWithWhereUniqueWithoutMembershipInput | MemberPaymentUpdateWithWhereUniqueWithoutMembershipInput[]
    updateMany?: MemberPaymentUpdateManyWithWhereWithoutMembershipInput | MemberPaymentUpdateManyWithWhereWithoutMembershipInput[]
    deleteMany?: MemberPaymentScalarWhereInput | MemberPaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMemberPaymentsInput = {
    create?: XOR<UserCreateWithoutMemberPaymentsInput, UserUncheckedCreateWithoutMemberPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPaymentsInput
    connect?: MemberWhereUniqueInput
  }

  export type MembershipCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<MembershipCreateWithoutPaymentsInput, MembershipUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MembershipCreateOrConnectWithoutPaymentsInput
    connect?: MembershipWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMemberPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutMemberPaymentsInput, UserUncheckedCreateWithoutMemberPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberPaymentsInput
    upsert?: UserUpsertWithoutMemberPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemberPaymentsInput, UserUpdateWithoutMemberPaymentsInput>, UserUncheckedUpdateWithoutMemberPaymentsInput>
  }

  export type MemberUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPaymentsInput
    upsert?: MemberUpsertWithoutPaymentsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutPaymentsInput, MemberUpdateWithoutPaymentsInput>, MemberUncheckedUpdateWithoutPaymentsInput>
  }

  export type MembershipUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<MembershipCreateWithoutPaymentsInput, MembershipUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MembershipCreateOrConnectWithoutPaymentsInput
    upsert?: MembershipUpsertWithoutPaymentsInput
    disconnect?: MembershipWhereInput | boolean
    delete?: MembershipWhereInput | boolean
    connect?: MembershipWhereUniqueInput
    update?: XOR<XOR<MembershipUpdateToOneWithWhereWithoutPaymentsInput, MembershipUpdateWithoutPaymentsInput>, MembershipUncheckedUpdateWithoutPaymentsInput>
  }

  export type StaffAttendanceCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffAttendanceCreateWithoutStaffInput, StaffAttendanceUncheckedCreateWithoutStaffInput> | StaffAttendanceCreateWithoutStaffInput[] | StaffAttendanceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffAttendanceCreateOrConnectWithoutStaffInput | StaffAttendanceCreateOrConnectWithoutStaffInput[]
    createMany?: StaffAttendanceCreateManyStaffInputEnvelope
    connect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStaffInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    connect?: UserWhereUniqueInput
  }

  export type StaffAttendanceUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffAttendanceCreateWithoutStaffInput, StaffAttendanceUncheckedCreateWithoutStaffInput> | StaffAttendanceCreateWithoutStaffInput[] | StaffAttendanceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffAttendanceCreateOrConnectWithoutStaffInput | StaffAttendanceCreateOrConnectWithoutStaffInput[]
    createMany?: StaffAttendanceCreateManyStaffInputEnvelope
    connect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
  }

  export type EnumStaffTypeFieldUpdateOperationsInput = {
    set?: $Enums.StaffType
  }

  export type EnumStaffStatusFieldUpdateOperationsInput = {
    set?: $Enums.StaffStatus
  }

  export type StaffAttendanceUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffAttendanceCreateWithoutStaffInput, StaffAttendanceUncheckedCreateWithoutStaffInput> | StaffAttendanceCreateWithoutStaffInput[] | StaffAttendanceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffAttendanceCreateOrConnectWithoutStaffInput | StaffAttendanceCreateOrConnectWithoutStaffInput[]
    upsert?: StaffAttendanceUpsertWithWhereUniqueWithoutStaffInput | StaffAttendanceUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffAttendanceCreateManyStaffInputEnvelope
    set?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    disconnect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    delete?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    connect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    update?: StaffAttendanceUpdateWithWhereUniqueWithoutStaffInput | StaffAttendanceUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffAttendanceUpdateManyWithWhereWithoutStaffInput | StaffAttendanceUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffAttendanceScalarWhereInput | StaffAttendanceScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    upsert?: UserUpsertWithoutStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffInput, UserUpdateWithoutStaffInput>, UserUncheckedUpdateWithoutStaffInput>
  }

  export type StaffAttendanceUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffAttendanceCreateWithoutStaffInput, StaffAttendanceUncheckedCreateWithoutStaffInput> | StaffAttendanceCreateWithoutStaffInput[] | StaffAttendanceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffAttendanceCreateOrConnectWithoutStaffInput | StaffAttendanceCreateOrConnectWithoutStaffInput[]
    upsert?: StaffAttendanceUpsertWithWhereUniqueWithoutStaffInput | StaffAttendanceUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffAttendanceCreateManyStaffInputEnvelope
    set?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    disconnect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    delete?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    connect?: StaffAttendanceWhereUniqueInput | StaffAttendanceWhereUniqueInput[]
    update?: StaffAttendanceUpdateWithWhereUniqueWithoutStaffInput | StaffAttendanceUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffAttendanceUpdateManyWithWhereWithoutStaffInput | StaffAttendanceUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffAttendanceScalarWhereInput | StaffAttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStaffAttendancesInput = {
    create?: XOR<UserCreateWithoutStaffAttendancesInput, UserUncheckedCreateWithoutStaffAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<StaffCreateWithoutAttendancesInput, StaffUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutAttendancesInput
    connect?: StaffWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type UserUpdateOneRequiredWithoutStaffAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutStaffAttendancesInput, UserUncheckedCreateWithoutStaffAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffAttendancesInput
    upsert?: UserUpsertWithoutStaffAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffAttendancesInput, UserUpdateWithoutStaffAttendancesInput>, UserUncheckedUpdateWithoutStaffAttendancesInput>
  }

  export type StaffUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<StaffCreateWithoutAttendancesInput, StaffUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutAttendancesInput
    upsert?: StaffUpsertWithoutAttendancesInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutAttendancesInput, StaffUpdateWithoutAttendancesInput>, StaffUncheckedUpdateWithoutAttendancesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBusinessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[]
    notIn?: $Enums.BusinessType[]
    not?: NestedEnumBusinessTypeFilter<$PrismaModel> | $Enums.BusinessType
  }

  export type NestedEnumBusinessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[]
    notIn?: $Enums.BusinessType[]
    not?: NestedEnumBusinessTypeWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumBillingIntervalFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.BillingInterval[]
    notIn?: $Enums.BillingInterval[]
    not?: NestedEnumBillingIntervalFilter<$PrismaModel> | $Enums.BillingInterval
  }

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[]
    notIn?: $Enums.PlanStatus[]
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumBillingIntervalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.BillingInterval[]
    notIn?: $Enums.BillingInterval[]
    not?: NestedEnumBillingIntervalWithAggregatesFilter<$PrismaModel> | $Enums.BillingInterval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingIntervalFilter<$PrismaModel>
    _max?: NestedEnumBillingIntervalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[]
    notIn?: $Enums.PlanStatus[]
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | null
    notIn?: $Enums.PaymentMethod[] | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | null
    notIn?: $Enums.PaymentMethod[] | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[]
    notIn?: $Enums.MemberStatus[]
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[]
    notIn?: $Enums.MemberStatus[]
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type NestedEnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[]
    notIn?: $Enums.MembershipStatus[]
    not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
  }

  export type NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[]
    notIn?: $Enums.MembershipStatus[]
    not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
    _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
  }

  export type NestedEnumStaffTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffType | EnumStaffTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StaffType[]
    notIn?: $Enums.StaffType[]
    not?: NestedEnumStaffTypeFilter<$PrismaModel> | $Enums.StaffType
  }

  export type NestedEnumStaffStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffStatus | EnumStaffStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StaffStatus[]
    notIn?: $Enums.StaffStatus[]
    not?: NestedEnumStaffStatusFilter<$PrismaModel> | $Enums.StaffStatus
  }

  export type NestedEnumStaffTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffType | EnumStaffTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StaffType[]
    notIn?: $Enums.StaffType[]
    not?: NestedEnumStaffTypeWithAggregatesFilter<$PrismaModel> | $Enums.StaffType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffTypeFilter<$PrismaModel>
    _max?: NestedEnumStaffTypeFilter<$PrismaModel>
  }

  export type NestedEnumStaffStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffStatus | EnumStaffStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StaffStatus[]
    notIn?: $Enums.StaffStatus[]
    not?: NestedEnumStaffStatusWithAggregatesFilter<$PrismaModel> | $Enums.StaffStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffStatusFilter<$PrismaModel>
    _max?: NestedEnumStaffStatusFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutChildrenInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    business?: BusinessCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutChildrenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
  }

  export type UserCreateWithoutParentInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserCreateNestedManyWithoutParentInput
    business?: BusinessCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutParentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserCreateManyParentInputEnvelope = {
    data: UserCreateManyParentInput | UserCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutUserInput = {
    id?: string
    businessName: string
    businessType: $Enums.BusinessType
    mobileNumber: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUncheckedCreateWithoutUserInput = {
    id?: string
    businessName: string
    businessType: $Enums.BusinessType
    mobileNumber: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessCreateOrConnectWithoutUserInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    subscriptionId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MemberCreateWithoutAdminInput = {
    id?: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: MemberPaymentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: MemberPaymentUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutAdminInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput>
  }

  export type MemberCreateManyAdminInputEnvelope = {
    data: MemberCreateManyAdminInput | MemberCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type StaffCreateWithoutAdminInput = {
    id?: string
    name: string
    username?: string | null
    email?: string | null
    mobileNumber: string
    passwordHash?: string | null
    staffType: $Enums.StaffType
    designation?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.StaffStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: StaffAttendanceCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    username?: string | null
    email?: string | null
    mobileNumber: string
    passwordHash?: string | null
    staffType: $Enums.StaffType
    designation?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.StaffStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: StaffAttendanceUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutAdminInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput>
  }

  export type StaffCreateManyAdminInputEnvelope = {
    data: StaffCreateManyAdminInput | StaffCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type StaffAttendanceCreateWithoutAdminInput = {
    id?: string
    attendanceDate: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staff: StaffCreateNestedOneWithoutAttendancesInput
  }

  export type StaffAttendanceUncheckedCreateWithoutAdminInput = {
    id?: string
    staffId: string
    attendanceDate: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAttendanceCreateOrConnectWithoutAdminInput = {
    where: StaffAttendanceWhereUniqueInput
    create: XOR<StaffAttendanceCreateWithoutAdminInput, StaffAttendanceUncheckedCreateWithoutAdminInput>
  }

  export type StaffAttendanceCreateManyAdminInputEnvelope = {
    data: StaffAttendanceCreateManyAdminInput | StaffAttendanceCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type MembershipPlanCreateWithoutAdminInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationInDays: number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutMembershipPlanInput
  }

  export type MembershipPlanUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationInDays: number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMembershipPlanInput
  }

  export type MembershipPlanCreateOrConnectWithoutAdminInput = {
    where: MembershipPlanWhereUniqueInput
    create: XOR<MembershipPlanCreateWithoutAdminInput, MembershipPlanUncheckedCreateWithoutAdminInput>
  }

  export type MembershipPlanCreateManyAdminInputEnvelope = {
    data: MembershipPlanCreateManyAdminInput | MembershipPlanCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type MemberPaymentCreateWithoutAdminInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutPaymentsInput
    membership?: MembershipCreateNestedOneWithoutPaymentsInput
  }

  export type MemberPaymentUncheckedCreateWithoutAdminInput = {
    id?: string
    memberId: string
    membershipId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentCreateOrConnectWithoutAdminInput = {
    where: MemberPaymentWhereUniqueInput
    create: XOR<MemberPaymentCreateWithoutAdminInput, MemberPaymentUncheckedCreateWithoutAdminInput>
  }

  export type MemberPaymentCreateManyAdminInputEnvelope = {
    data: MemberPaymentCreateManyAdminInput | MemberPaymentCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChildrenInput = {
    update: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChildrenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
  }

  export type UserUpdateManyWithWhereWithoutParentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutParentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    encryptedPassword?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    parentId?: StringNullableFilter<"User"> | string | null
    isFirstLogin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type BusinessUpsertWithoutUserInput = {
    update: XOR<BusinessUpdateWithoutUserInput, BusinessUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutUserInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutUserInput, BusinessUncheckedUpdateWithoutUserInput>
  }

  export type BusinessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    paymentRequired?: BoolFilter<"Subscription"> | boolean
    startDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    autoRenew?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    subscriptionId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    paymentMethod?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"Payment"> | string | null
    gatewayOrderId?: StringNullableFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    gatewaySignature?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type MemberUpsertWithWhereUniqueWithoutAdminInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutAdminInput, MemberUncheckedUpdateWithoutAdminInput>
    create: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutAdminInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutAdminInput, MemberUncheckedUpdateWithoutAdminInput>
  }

  export type MemberUpdateManyWithWhereWithoutAdminInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutAdminInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    adminId?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    mobileNumber?: StringFilter<"Member"> | string
    email?: StringNullableFilter<"Member"> | string | null
    gender?: EnumGenderNullableFilter<"Member"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableFilter<"Member"> | Date | string | null
    address?: StringNullableFilter<"Member"> | string | null
    city?: StringNullableFilter<"Member"> | string | null
    state?: StringNullableFilter<"Member"> | string | null
    pincode?: StringNullableFilter<"Member"> | string | null
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type StaffUpsertWithWhereUniqueWithoutAdminInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutAdminInput, StaffUncheckedUpdateWithoutAdminInput>
    create: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutAdminInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutAdminInput, StaffUncheckedUpdateWithoutAdminInput>
  }

  export type StaffUpdateManyWithWhereWithoutAdminInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutAdminInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: StringFilter<"Staff"> | string
    adminId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    username?: StringNullableFilter<"Staff"> | string | null
    email?: StringNullableFilter<"Staff"> | string | null
    mobileNumber?: StringFilter<"Staff"> | string
    passwordHash?: StringNullableFilter<"Staff"> | string | null
    staffType?: EnumStaffTypeFilter<"Staff"> | $Enums.StaffType
    designation?: StringNullableFilter<"Staff"> | string | null
    address?: StringNullableFilter<"Staff"> | string | null
    city?: StringNullableFilter<"Staff"> | string | null
    state?: StringNullableFilter<"Staff"> | string | null
    pincode?: StringNullableFilter<"Staff"> | string | null
    status?: EnumStaffStatusFilter<"Staff"> | $Enums.StaffStatus
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
  }

  export type StaffAttendanceUpsertWithWhereUniqueWithoutAdminInput = {
    where: StaffAttendanceWhereUniqueInput
    update: XOR<StaffAttendanceUpdateWithoutAdminInput, StaffAttendanceUncheckedUpdateWithoutAdminInput>
    create: XOR<StaffAttendanceCreateWithoutAdminInput, StaffAttendanceUncheckedCreateWithoutAdminInput>
  }

  export type StaffAttendanceUpdateWithWhereUniqueWithoutAdminInput = {
    where: StaffAttendanceWhereUniqueInput
    data: XOR<StaffAttendanceUpdateWithoutAdminInput, StaffAttendanceUncheckedUpdateWithoutAdminInput>
  }

  export type StaffAttendanceUpdateManyWithWhereWithoutAdminInput = {
    where: StaffAttendanceScalarWhereInput
    data: XOR<StaffAttendanceUpdateManyMutationInput, StaffAttendanceUncheckedUpdateManyWithoutAdminInput>
  }

  export type StaffAttendanceScalarWhereInput = {
    AND?: StaffAttendanceScalarWhereInput | StaffAttendanceScalarWhereInput[]
    OR?: StaffAttendanceScalarWhereInput[]
    NOT?: StaffAttendanceScalarWhereInput | StaffAttendanceScalarWhereInput[]
    id?: StringFilter<"StaffAttendance"> | string
    adminId?: StringFilter<"StaffAttendance"> | string
    staffId?: StringFilter<"StaffAttendance"> | string
    attendanceDate?: DateTimeFilter<"StaffAttendance"> | Date | string
    checkIn?: DateTimeNullableFilter<"StaffAttendance"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"StaffAttendance"> | Date | string | null
    status?: EnumAttendanceStatusFilter<"StaffAttendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"StaffAttendance"> | string | null
    createdAt?: DateTimeFilter<"StaffAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAttendance"> | Date | string
  }

  export type MembershipPlanUpsertWithWhereUniqueWithoutAdminInput = {
    where: MembershipPlanWhereUniqueInput
    update: XOR<MembershipPlanUpdateWithoutAdminInput, MembershipPlanUncheckedUpdateWithoutAdminInput>
    create: XOR<MembershipPlanCreateWithoutAdminInput, MembershipPlanUncheckedCreateWithoutAdminInput>
  }

  export type MembershipPlanUpdateWithWhereUniqueWithoutAdminInput = {
    where: MembershipPlanWhereUniqueInput
    data: XOR<MembershipPlanUpdateWithoutAdminInput, MembershipPlanUncheckedUpdateWithoutAdminInput>
  }

  export type MembershipPlanUpdateManyWithWhereWithoutAdminInput = {
    where: MembershipPlanScalarWhereInput
    data: XOR<MembershipPlanUpdateManyMutationInput, MembershipPlanUncheckedUpdateManyWithoutAdminInput>
  }

  export type MembershipPlanScalarWhereInput = {
    AND?: MembershipPlanScalarWhereInput | MembershipPlanScalarWhereInput[]
    OR?: MembershipPlanScalarWhereInput[]
    NOT?: MembershipPlanScalarWhereInput | MembershipPlanScalarWhereInput[]
    id?: StringFilter<"MembershipPlan"> | string
    adminId?: StringFilter<"MembershipPlan"> | string
    name?: StringFilter<"MembershipPlan"> | string
    description?: StringNullableFilter<"MembershipPlan"> | string | null
    price?: DecimalFilter<"MembershipPlan"> | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFilter<"MembershipPlan"> | number
    features?: JsonNullableFilter<"MembershipPlan">
    status?: EnumPlanStatusFilter<"MembershipPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"MembershipPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipPlan"> | Date | string
  }

  export type MemberPaymentUpsertWithWhereUniqueWithoutAdminInput = {
    where: MemberPaymentWhereUniqueInput
    update: XOR<MemberPaymentUpdateWithoutAdminInput, MemberPaymentUncheckedUpdateWithoutAdminInput>
    create: XOR<MemberPaymentCreateWithoutAdminInput, MemberPaymentUncheckedCreateWithoutAdminInput>
  }

  export type MemberPaymentUpdateWithWhereUniqueWithoutAdminInput = {
    where: MemberPaymentWhereUniqueInput
    data: XOR<MemberPaymentUpdateWithoutAdminInput, MemberPaymentUncheckedUpdateWithoutAdminInput>
  }

  export type MemberPaymentUpdateManyWithWhereWithoutAdminInput = {
    where: MemberPaymentScalarWhereInput
    data: XOR<MemberPaymentUpdateManyMutationInput, MemberPaymentUncheckedUpdateManyWithoutAdminInput>
  }

  export type MemberPaymentScalarWhereInput = {
    AND?: MemberPaymentScalarWhereInput | MemberPaymentScalarWhereInput[]
    OR?: MemberPaymentScalarWhereInput[]
    NOT?: MemberPaymentScalarWhereInput | MemberPaymentScalarWhereInput[]
    id?: StringFilter<"MemberPayment"> | string
    adminId?: StringFilter<"MemberPayment"> | string
    memberId?: StringFilter<"MemberPayment"> | string
    membershipId?: StringNullableFilter<"MemberPayment"> | string | null
    amount?: DecimalFilter<"MemberPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"MemberPayment"> | string
    paymentMethod?: EnumPaymentMethodNullableFilter<"MemberPayment"> | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFilter<"MemberPayment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"MemberPayment"> | string | null
    notes?: StringNullableFilter<"MemberPayment"> | string | null
    paidAt?: DateTimeNullableFilter<"MemberPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"MemberPayment"> | Date | string
    updatedAt?: DateTimeFilter<"MemberPayment"> | Date | string
  }

  export type UserCreateWithoutBusinessInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutBusinessInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutBusinessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
  }

  export type UserUpsertWithoutBusinessInput = {
    update: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusinessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
  }

  export type UserUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingInterval: $Enums.BillingInterval
    durationInDays: number
    maxMembers?: number | null
    maxStaff?: number | null
    maxBusinesses?: number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    billingInterval: $Enums.BillingInterval
    durationInDays: number
    maxMembers?: number | null
    maxStaff?: number | null
    maxBusinesses?: number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateOrConnectWithoutSubscriptionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    business?: BusinessCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PaymentCreateWithoutSubscriptionInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentCreateManySubscriptionInputEnvelope = {
    data: PaymentCreateManySubscriptionInput | PaymentCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type PlanUpsertWithoutSubscriptionsInput = {
    update: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingInterval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    durationInDays?: IntFieldUpdateOperationsInput | number
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxBusinesses?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billingInterval?: EnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval
    durationInDays?: IntFieldUpdateOperationsInput | number
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxBusinesses?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type SubscriptionCreateWithoutPaymentsInput = {
    id?: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    planId: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    business?: BusinessCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutMembersInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    business?: BusinessCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembersInput, UserUncheckedCreateWithoutMembersInput>
  }

  export type MembershipCreateWithoutMemberInput = {
    id?: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    membershipPlan: MembershipPlanCreateNestedOneWithoutMembershipsInput
    payments?: MemberPaymentCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateWithoutMemberInput = {
    id?: string
    membershipPlanId: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: MemberPaymentUncheckedCreateNestedManyWithoutMembershipInput
  }

  export type MembershipCreateOrConnectWithoutMemberInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput>
  }

  export type MembershipCreateManyMemberInputEnvelope = {
    data: MembershipCreateManyMemberInput | MembershipCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type MemberPaymentCreateWithoutMemberInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutMemberPaymentsInput
    membership?: MembershipCreateNestedOneWithoutPaymentsInput
  }

  export type MemberPaymentUncheckedCreateWithoutMemberInput = {
    id?: string
    adminId: string
    membershipId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentCreateOrConnectWithoutMemberInput = {
    where: MemberPaymentWhereUniqueInput
    create: XOR<MemberPaymentCreateWithoutMemberInput, MemberPaymentUncheckedCreateWithoutMemberInput>
  }

  export type MemberPaymentCreateManyMemberInputEnvelope = {
    data: MemberPaymentCreateManyMemberInput | MemberPaymentCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMembersInput = {
    update: XOR<UserUpdateWithoutMembersInput, UserUncheckedUpdateWithoutMembersInput>
    create: XOR<UserCreateWithoutMembersInput, UserUncheckedCreateWithoutMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembersInput, UserUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type MembershipUpsertWithWhereUniqueWithoutMemberInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutMemberInput, MembershipUncheckedUpdateWithoutMemberInput>
    create: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutMemberInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutMemberInput, MembershipUncheckedUpdateWithoutMemberInput>
  }

  export type MembershipUpdateManyWithWhereWithoutMemberInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutMemberInput>
  }

  export type MembershipScalarWhereInput = {
    AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    OR?: MembershipScalarWhereInput[]
    NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    id?: StringFilter<"Membership"> | string
    memberId?: StringFilter<"Membership"> | string
    membershipPlanId?: StringFilter<"Membership"> | string
    membershipName?: StringFilter<"Membership"> | string
    amount?: DecimalFilter<"Membership"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"Membership"> | Date | string
    endDate?: DateTimeFilter<"Membership"> | Date | string
    status?: EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
  }

  export type MemberPaymentUpsertWithWhereUniqueWithoutMemberInput = {
    where: MemberPaymentWhereUniqueInput
    update: XOR<MemberPaymentUpdateWithoutMemberInput, MemberPaymentUncheckedUpdateWithoutMemberInput>
    create: XOR<MemberPaymentCreateWithoutMemberInput, MemberPaymentUncheckedCreateWithoutMemberInput>
  }

  export type MemberPaymentUpdateWithWhereUniqueWithoutMemberInput = {
    where: MemberPaymentWhereUniqueInput
    data: XOR<MemberPaymentUpdateWithoutMemberInput, MemberPaymentUncheckedUpdateWithoutMemberInput>
  }

  export type MemberPaymentUpdateManyWithWhereWithoutMemberInput = {
    where: MemberPaymentScalarWhereInput
    data: XOR<MemberPaymentUpdateManyMutationInput, MemberPaymentUncheckedUpdateManyWithoutMemberInput>
  }

  export type UserCreateWithoutMembershipPlansInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    business?: BusinessCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutMembershipPlansInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutMembershipPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipPlansInput, UserUncheckedCreateWithoutMembershipPlansInput>
  }

  export type MembershipCreateWithoutMembershipPlanInput = {
    id?: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutMembershipsInput
    payments?: MemberPaymentCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateWithoutMembershipPlanInput = {
    id?: string
    memberId: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: MemberPaymentUncheckedCreateNestedManyWithoutMembershipInput
  }

  export type MembershipCreateOrConnectWithoutMembershipPlanInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutMembershipPlanInput, MembershipUncheckedCreateWithoutMembershipPlanInput>
  }

  export type MembershipCreateManyMembershipPlanInputEnvelope = {
    data: MembershipCreateManyMembershipPlanInput | MembershipCreateManyMembershipPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMembershipPlansInput = {
    update: XOR<UserUpdateWithoutMembershipPlansInput, UserUncheckedUpdateWithoutMembershipPlansInput>
    create: XOR<UserCreateWithoutMembershipPlansInput, UserUncheckedCreateWithoutMembershipPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipPlansInput, UserUncheckedUpdateWithoutMembershipPlansInput>
  }

  export type UserUpdateWithoutMembershipPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type MembershipUpsertWithWhereUniqueWithoutMembershipPlanInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutMembershipPlanInput, MembershipUncheckedUpdateWithoutMembershipPlanInput>
    create: XOR<MembershipCreateWithoutMembershipPlanInput, MembershipUncheckedCreateWithoutMembershipPlanInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutMembershipPlanInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutMembershipPlanInput, MembershipUncheckedUpdateWithoutMembershipPlanInput>
  }

  export type MembershipUpdateManyWithWhereWithoutMembershipPlanInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutMembershipPlanInput>
  }

  export type MemberCreateWithoutMembershipsInput = {
    id?: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutMembersInput
    payments?: MemberPaymentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutMembershipsInput = {
    id?: string
    adminId: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: MemberPaymentUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutMembershipsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMembershipsInput, MemberUncheckedCreateWithoutMembershipsInput>
  }

  export type MembershipPlanCreateWithoutMembershipsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationInDays: number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutMembershipPlansInput
  }

  export type MembershipPlanUncheckedCreateWithoutMembershipsInput = {
    id?: string
    adminId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationInDays: number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipPlanCreateOrConnectWithoutMembershipsInput = {
    where: MembershipPlanWhereUniqueInput
    create: XOR<MembershipPlanCreateWithoutMembershipsInput, MembershipPlanUncheckedCreateWithoutMembershipsInput>
  }

  export type MemberPaymentCreateWithoutMembershipInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutMemberPaymentsInput
    member: MemberCreateNestedOneWithoutPaymentsInput
  }

  export type MemberPaymentUncheckedCreateWithoutMembershipInput = {
    id?: string
    adminId: string
    memberId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentCreateOrConnectWithoutMembershipInput = {
    where: MemberPaymentWhereUniqueInput
    create: XOR<MemberPaymentCreateWithoutMembershipInput, MemberPaymentUncheckedCreateWithoutMembershipInput>
  }

  export type MemberPaymentCreateManyMembershipInputEnvelope = {
    data: MemberPaymentCreateManyMembershipInput | MemberPaymentCreateManyMembershipInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithoutMembershipsInput = {
    update: XOR<MemberUpdateWithoutMembershipsInput, MemberUncheckedUpdateWithoutMembershipsInput>
    create: XOR<MemberCreateWithoutMembershipsInput, MemberUncheckedCreateWithoutMembershipsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMembershipsInput, MemberUncheckedUpdateWithoutMembershipsInput>
  }

  export type MemberUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutMembersNestedInput
    payments?: MemberPaymentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: MemberPaymentUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MembershipPlanUpsertWithoutMembershipsInput = {
    update: XOR<MembershipPlanUpdateWithoutMembershipsInput, MembershipPlanUncheckedUpdateWithoutMembershipsInput>
    create: XOR<MembershipPlanCreateWithoutMembershipsInput, MembershipPlanUncheckedCreateWithoutMembershipsInput>
    where?: MembershipPlanWhereInput
  }

  export type MembershipPlanUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: MembershipPlanWhereInput
    data: XOR<MembershipPlanUpdateWithoutMembershipsInput, MembershipPlanUncheckedUpdateWithoutMembershipsInput>
  }

  export type MembershipPlanUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFieldUpdateOperationsInput | number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutMembershipPlansNestedInput
  }

  export type MembershipPlanUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFieldUpdateOperationsInput | number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentUpsertWithWhereUniqueWithoutMembershipInput = {
    where: MemberPaymentWhereUniqueInput
    update: XOR<MemberPaymentUpdateWithoutMembershipInput, MemberPaymentUncheckedUpdateWithoutMembershipInput>
    create: XOR<MemberPaymentCreateWithoutMembershipInput, MemberPaymentUncheckedCreateWithoutMembershipInput>
  }

  export type MemberPaymentUpdateWithWhereUniqueWithoutMembershipInput = {
    where: MemberPaymentWhereUniqueInput
    data: XOR<MemberPaymentUpdateWithoutMembershipInput, MemberPaymentUncheckedUpdateWithoutMembershipInput>
  }

  export type MemberPaymentUpdateManyWithWhereWithoutMembershipInput = {
    where: MemberPaymentScalarWhereInput
    data: XOR<MemberPaymentUpdateManyMutationInput, MemberPaymentUncheckedUpdateManyWithoutMembershipInput>
  }

  export type UserCreateWithoutMemberPaymentsInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    business?: BusinessCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutMemberPaymentsInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutMemberPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemberPaymentsInput, UserUncheckedCreateWithoutMemberPaymentsInput>
  }

  export type MemberCreateWithoutPaymentsInput = {
    id?: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutMembersInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutPaymentsInput = {
    id?: string
    adminId: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutPaymentsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
  }

  export type MembershipCreateWithoutPaymentsInput = {
    id?: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutMembershipsInput
    membershipPlan: MembershipPlanCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutPaymentsInput = {
    id?: string
    memberId: string
    membershipPlanId: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipCreateOrConnectWithoutPaymentsInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutPaymentsInput, MembershipUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutMemberPaymentsInput = {
    update: XOR<UserUpdateWithoutMemberPaymentsInput, UserUncheckedUpdateWithoutMemberPaymentsInput>
    create: XOR<UserCreateWithoutMemberPaymentsInput, UserUncheckedCreateWithoutMemberPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemberPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemberPaymentsInput, UserUncheckedUpdateWithoutMemberPaymentsInput>
  }

  export type UserUpdateWithoutMemberPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutMemberPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type MemberUpsertWithoutPaymentsInput = {
    update: XOR<MemberUpdateWithoutPaymentsInput, MemberUncheckedUpdateWithoutPaymentsInput>
    create: XOR<MemberCreateWithoutPaymentsInput, MemberUncheckedCreateWithoutPaymentsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutPaymentsInput, MemberUncheckedUpdateWithoutPaymentsInput>
  }

  export type MemberUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutMembersNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MembershipUpsertWithoutPaymentsInput = {
    update: XOR<MembershipUpdateWithoutPaymentsInput, MembershipUncheckedUpdateWithoutPaymentsInput>
    create: XOR<MembershipCreateWithoutPaymentsInput, MembershipUncheckedCreateWithoutPaymentsInput>
    where?: MembershipWhereInput
  }

  export type MembershipUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: MembershipWhereInput
    data: XOR<MembershipUpdateWithoutPaymentsInput, MembershipUncheckedUpdateWithoutPaymentsInput>
  }

  export type MembershipUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    membershipPlan?: MembershipPlanUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAttendanceCreateWithoutStaffInput = {
    id?: string
    attendanceDate: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutStaffAttendancesInput
  }

  export type StaffAttendanceUncheckedCreateWithoutStaffInput = {
    id?: string
    adminId: string
    attendanceDate: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAttendanceCreateOrConnectWithoutStaffInput = {
    where: StaffAttendanceWhereUniqueInput
    create: XOR<StaffAttendanceCreateWithoutStaffInput, StaffAttendanceUncheckedCreateWithoutStaffInput>
  }

  export type StaffAttendanceCreateManyStaffInputEnvelope = {
    data: StaffAttendanceCreateManyStaffInput | StaffAttendanceCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStaffInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    business?: BusinessCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staffAttendances?: StaffAttendanceUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
  }

  export type StaffAttendanceUpsertWithWhereUniqueWithoutStaffInput = {
    where: StaffAttendanceWhereUniqueInput
    update: XOR<StaffAttendanceUpdateWithoutStaffInput, StaffAttendanceUncheckedUpdateWithoutStaffInput>
    create: XOR<StaffAttendanceCreateWithoutStaffInput, StaffAttendanceUncheckedCreateWithoutStaffInput>
  }

  export type StaffAttendanceUpdateWithWhereUniqueWithoutStaffInput = {
    where: StaffAttendanceWhereUniqueInput
    data: XOR<StaffAttendanceUpdateWithoutStaffInput, StaffAttendanceUncheckedUpdateWithoutStaffInput>
  }

  export type StaffAttendanceUpdateManyWithWhereWithoutStaffInput = {
    where: StaffAttendanceScalarWhereInput
    data: XOR<StaffAttendanceUpdateManyMutationInput, StaffAttendanceUncheckedUpdateManyWithoutStaffInput>
  }

  export type UserUpsertWithoutStaffInput = {
    update: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutStaffAttendancesInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    business?: BusinessCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    members?: MemberCreateNestedManyWithoutAdminInput
    staff?: StaffCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutStaffAttendancesInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    parentId?: string | null
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    members?: MemberUncheckedCreateNestedManyWithoutAdminInput
    staff?: StaffUncheckedCreateNestedManyWithoutAdminInput
    membershipPlans?: MembershipPlanUncheckedCreateNestedManyWithoutAdminInput
    memberPayments?: MemberPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutStaffAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffAttendancesInput, UserUncheckedCreateWithoutStaffAttendancesInput>
  }

  export type StaffCreateWithoutAttendancesInput = {
    id?: string
    name: string
    username?: string | null
    email?: string | null
    mobileNumber: string
    passwordHash?: string | null
    staffType: $Enums.StaffType
    designation?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.StaffStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutAttendancesInput = {
    id?: string
    adminId: string
    name: string
    username?: string | null
    email?: string | null
    mobileNumber: string
    passwordHash?: string | null
    staffType: $Enums.StaffType
    designation?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.StaffStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutAttendancesInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutAttendancesInput, StaffUncheckedCreateWithoutAttendancesInput>
  }

  export type UserUpsertWithoutStaffAttendancesInput = {
    update: XOR<UserUpdateWithoutStaffAttendancesInput, UserUncheckedUpdateWithoutStaffAttendancesInput>
    create: XOR<UserCreateWithoutStaffAttendancesInput, UserUncheckedCreateWithoutStaffAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffAttendancesInput, UserUncheckedUpdateWithoutStaffAttendancesInput>
  }

  export type UserUpdateWithoutStaffAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type StaffUpsertWithoutAttendancesInput = {
    update: XOR<StaffUpdateWithoutAttendancesInput, StaffUncheckedUpdateWithoutAttendancesInput>
    create: XOR<StaffCreateWithoutAttendancesInput, StaffUncheckedCreateWithoutAttendancesInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutAttendancesInput, StaffUncheckedUpdateWithoutAttendancesInput>
  }

  export type StaffUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    staffType?: EnumStaffTypeFieldUpdateOperationsInput | $Enums.StaffType
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStaffStatusFieldUpdateOperationsInput | $Enums.StaffStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    staffType?: EnumStaffTypeFieldUpdateOperationsInput | $Enums.StaffType
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStaffStatusFieldUpdateOperationsInput | $Enums.StaffStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyParentInput = {
    id?: string
    name: string
    username: string
    email?: string | null
    passwordHash: string
    encryptedPassword?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isFirstLogin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    planId: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    subscriptionId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberCreateManyAdminInput = {
    id?: string
    name: string
    mobileNumber: string
    email?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateManyAdminInput = {
    id?: string
    name: string
    username?: string | null
    email?: string | null
    mobileNumber: string
    passwordHash?: string | null
    staffType: $Enums.StaffType
    designation?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    status?: $Enums.StaffStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAttendanceCreateManyAdminInput = {
    id?: string
    staffId: string
    attendanceDate: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipPlanCreateManyAdminInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationInDays: number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentCreateManyAdminInput = {
    id?: string
    memberId: string
    membershipId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUpdateManyWithoutParentNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    members?: MemberUpdateManyWithoutAdminNestedInput
    staff?: StaffUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    members?: MemberUncheckedUpdateManyWithoutAdminNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    staffAttendances?: StaffAttendanceUncheckedUpdateManyWithoutAdminNestedInput
    membershipPlans?: MembershipPlanUncheckedUpdateManyWithoutAdminNestedInput
    memberPayments?: MemberPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isFirstLogin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: MemberPaymentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: MemberPaymentUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    staffType?: EnumStaffTypeFieldUpdateOperationsInput | $Enums.StaffType
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStaffStatusFieldUpdateOperationsInput | $Enums.StaffStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: StaffAttendanceUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    staffType?: EnumStaffTypeFieldUpdateOperationsInput | $Enums.StaffType
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStaffStatusFieldUpdateOperationsInput | $Enums.StaffStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: StaffAttendanceUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    staffType?: EnumStaffTypeFieldUpdateOperationsInput | $Enums.StaffType
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStaffStatusFieldUpdateOperationsInput | $Enums.StaffStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAttendanceUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type StaffAttendanceUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAttendanceUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipPlanUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFieldUpdateOperationsInput | number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutMembershipPlanNestedInput
  }

  export type MembershipPlanUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFieldUpdateOperationsInput | number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutMembershipPlanNestedInput
  }

  export type MembershipPlanUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationInDays?: IntFieldUpdateOperationsInput | number
    features?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutPaymentsNestedInput
    membership?: MembershipUpdateOneWithoutPaymentsNestedInput
  }

  export type MemberPaymentUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    membershipId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    membershipId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    userId: string
    paymentRequired?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentRequired?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManySubscriptionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyMemberInput = {
    id?: string
    membershipPlanId: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentCreateManyMemberInput = {
    id?: string
    adminId: string
    membershipId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipPlan?: MembershipPlanUpdateOneRequiredWithoutMembershipsNestedInput
    payments?: MemberPaymentUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: MemberPaymentUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipPlanId?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutMemberPaymentsNestedInput
    membership?: MembershipUpdateOneWithoutPaymentsNestedInput
  }

  export type MemberPaymentUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    membershipId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    membershipId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyMembershipPlanInput = {
    id?: string
    memberId: string
    membershipName: string
    amount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.MembershipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipUpdateWithoutMembershipPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    payments?: MemberPaymentUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateWithoutMembershipPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: MemberPaymentUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateManyWithoutMembershipPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    membershipName?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentCreateManyMembershipInput = {
    id?: string
    adminId: string
    memberId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: $Enums.PaymentMethod | null
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    notes?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberPaymentUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutMemberPaymentsNestedInput
    member?: MemberUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type MemberPaymentUncheckedUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberPaymentUncheckedUpdateManyWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAttendanceCreateManyStaffInput = {
    id?: string
    adminId: string
    attendanceDate: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAttendanceUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutStaffAttendancesNestedInput
  }

  export type StaffAttendanceUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAttendanceUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    attendanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}