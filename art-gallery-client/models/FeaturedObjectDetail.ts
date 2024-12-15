export interface FeaturedObjectDetail {
  access: string;
  object_id: number;
  idno: string;
  media_icon_url: string;
  media_large_url: string;
  media_medium_url: string;
  media_small_url: string;
  reps: string;
  object_name: string;
  entity_id: string;
  entity_name: string;
  ar_digital_asset: string | null;
  ar_3d_file: string | null;
  ar_3d_file_usdz: string | null;
  ar_audio_file: string;
  historical_context: string;
  work_description: string;
  work_date: string;
  work_medium: string;
  location_id: string;
  location: string;
  location_notes: string;
  location_georeference: string;
  credit_line: string;
  related_objects: string;
}
