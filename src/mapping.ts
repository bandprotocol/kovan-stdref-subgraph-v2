import { GetReferenceDataCall, GetReferenceDataBulkCall } from "../generated/StdReferenceProxy/StdReferenceProxy"
import { GetReferenceData } from "../generated/schema"

import { ethereum } from "@graphprotocol/graph-ts"

function NewGetReferenceData(
  call: ethereum.Call
): GetReferenceData {
  let id = call.transaction.hash.toHex();

  let entity = new GetReferenceData(id);
  entity.from = call.from;
  entity.height = call.block.number.toI32();
  entity.timestamp = call.block.timestamp.toI32();

  return entity;
}

export function handleGetReferenceData(
  call: GetReferenceDataCall
): void {
  let entity = NewGetReferenceData(call);
  entity.symbols = [call.inputs._quote];

  entity.save();
}

export function handleGetReferenceDataBulk(
  call: GetReferenceDataBulkCall
): void {
  let entity = NewGetReferenceData(call);
  entity.symbols = call.inputs._quotes;

  entity.save();
}