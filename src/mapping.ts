import { GetReferenceDataCall, GetReferenceDataBulkCall } from "../generated/StdReferenceProxy/StdReferenceProxy"
import { GetReferenceData } from "../generated/schema"

export function handleGetReferenceData(
  call: GetReferenceDataCall
): void {
  let id = call.transaction.hash.toHex();

  let entity = new GetReferenceData(id);
  entity.from = call.transaction.from;
  entity.symbols = [call.inputs._quote];

  entity.save();
}

export function handleGetReferenceDataBulk(
  call: GetReferenceDataBulkCall
): void {
  let id = call.transaction.hash.toHex();

  let entity = new GetReferenceData(id);
  entity.from = call.transaction.from;
  entity.symbols = call.inputs._quotes;

  entity.save();
}