//
//  CoinbaseModule.swift
//  ReactNative7App
//
//  Created by PASINDU RUPASINGHE on 2024-02-01.
//

import Foundation

@available(iOS 13.0, *)
@objc(CoinbaseModule)
class CoinbaseModule: NSObject{
  private var count = 0;
  private var address = "";
  private var cberror: NSError? = nil;
  private var Coinbase = CoinbaseActions();
  
  @objc
  func increment(_ callback:RCTResponseSenderBlock){
    count += 1;
    callback([count]);
  }
  
  @objc
  static func requiresMainQueueSetup() ->Bool{
    return true;
  }
  
  @objc
  func constantsToExport() -> [String: Any]!{
    return ["initialCount": 0];
  }
  
  @objc
  func decrement(_ resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock){
    if(count == 0){
      let error = NSError(domain: "", code: 200, userInfo: nil);
      reject("ERROR_COUNT", "Count can't be negative", error)
    }
    else{
      count -= 1;
      resolve(["Count is", count]);
    }
  }

  @objc
  func initialHandshake(_ resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock){
      Task {
        try await Coinbase.connectToCoinbase();
      }
  }
}
