//
//  CoinbaseModule.m
//  ReactNative7App
//
//  Created by PASINDU RUPASINGHE on 2024-02-01.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CoinbaseModule,NSObject)

RCT_EXTERN_METHOD(increment: (RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(decrement: (RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(initializeCoinbase: (NSString *)uri)

RCT_EXTERN_METHOD(initialHandshake: (RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end
