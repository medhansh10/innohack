import { LunarDataset } from '../types/lunar';

export const CHANDRAYAAN_PRESETS: LunarDataset[] = [
  {
    id: 'CH3_TMC2_SHIV_SHAKTI_SP',
    mission: 'Chandrayaan-3',
    instrument: 'TMC-2 (Terrain Mapping Camera-2)',
    productUri: 'URN:ISRO:CH3:TMC2:RAW:L1:20230823T124218_SHIV_SHAKTI_V01.ZIP',
    targetFeature: 'Shiv Shakti Point (Lunar South Pole - Prime Landing Zone)',
    targetCoordinates: {
      lat: -69.373,
      lon: 32.348,
      latStr: '69.373° S',
      lonStr: '32.348° E',
    },
    footprintPolygon: [
      [-68.8, 31.2],
      [-68.9, 33.6],
      [-69.8, 33.4],
      [-69.7, 31.0],
    ],
    acquisitionTimeUtc: '2023-08-23T12:34:28.412Z',
    geometry: {
      incidenceDeg: 64.28,
      emissionDeg: 21.82,
      phaseDeg: 45.10,
      solarAzimuthDeg: 124.6,
      spacecraftAltitudeKm: 100.2,
      groundSamplingDistanceM: 5.0,
      solarElevationDeg: 18.4,
    },
    initialHapke: {
      w: 0.342,
      thetaBar: 24.5,
      g: -0.21,
      b0: 1.45,
      h: 0.065,
    },
    currentHapke: {
      w: 0.342,
      thetaBar: 24.5,
      g: -0.21,
      b0: 1.45,
      h: 0.065,
    },
    signalToNoiseRatioDb: 148.5,
    subSolarPoint: { lat: -1.2, lon: 45.8 },
    subSpacecraftPoint: { lat: -69.3, lon: 32.2 },
    waterIceAbsorptionIndex: 0.14,
    meanReflectance: 0.088,
    spectralBands: ['Band-1 (Pan: 500-850 nm)'],
    pds4XmlLabel: `<?xml version="1.0" encoding="UTF-8"?>
<Product_Observational xmlns="http://pds.nasa.gov/pds4/pds/v1"
  xmlns:isro="http://isro.gov.in/pds4/mission/ch3">
  <Identification_Area>
    <logical_identifier>urn:isro:pds:ch3_tmc2_shiv_shakti_calibrated</logical_identifier>
    <version_id>1.0</version_id>
    <title>Chandrayaan-3 TMC-2 Calibrated Radiance Swath - Shiv Shakti Point</title>
    <information_model_version>1.16.0.0</information_model_version>
    <product_class>Product_Observational</product_class>
  </Identification_Area>
  <Observation_Area>
    <Time_Coordinates>
      <start_date_time>2023-08-23T12:34:28.412Z</start_date_time>
      <stop_date_time>2023-08-23T12:35:12.180Z</stop_date_time>
    </Time_Coordinates>
    <Target_Identification>
      <name>Moon</name>
      <type>Satellite</type>
    </Target_Identification>
    <Mission_Area>
      <isro:Mission_Information>
        <isro:mission_name>CHANDRAYAAN-3</isro:mission_name>
        <isro:spacecraft_clock_start_count>1/428919201.218</isro:spacecraft_clock_start_count>
        <isro:detector_temperature unit="degC">-14.2</isro:detector_temperature>
      </isro:Mission_Information>
    </Mission_Area>
  </Observation_Area>
  <File_Area_Observational>
    <File>
      <file_name>CH3_TMC2_SHIV_SHAKTI_L2C.IMG</file_name>
      <records>4096</records>
    </File>
    <Array_2D_Image>
      <axes>2</axes>
      <axis_index_order>Last_Index_Fastest</axis_index_order>
      <Element_Array>
        <data_type>IEEE754MSBSingle</data_type>
        <unit>W/(m**2.sr.um)</unit>
      </Element_Array>
    </Array_2D_Image>
  </File_Area_Observational>
</Product_Observational>`,
  },
  {
    id: 'CH2_OHRC_ARISTARCHUS',
    mission: 'Chandrayaan-2',
    instrument: 'OHRC (Orbiter High Resolution Camera)',
    productUri: 'URN:ISRO:CH2:OHRC:RAW:L1:20240103T100517_ARISTARCHUS_V02.ZIP',
    targetFeature: 'Aristarchus Plateau & Pyroclastic Deposit',
    targetCoordinates: {
      lat: 23.73,
      lon: -47.49,
      latStr: '23.730° N',
      lonStr: '47.490° W',
    },
    footprintPolygon: [
      [24.4, -48.2],
      [24.5, -46.7],
      [23.0, -46.6],
      [22.9, -48.1],
    ],
    acquisitionTimeUtc: '2024-01-03T10:05:17.645Z',
    geometry: {
      incidenceDeg: 52.14,
      emissionDeg: 8.41,
      phaseDeg: 46.22,
      solarAzimuthDeg: 88.3,
      spacecraftAltitudeKm: 104.8,
      groundSamplingDistanceM: 0.25,
      solarElevationDeg: 37.8,
    },
    initialHapke: {
      w: 0.485,
      thetaBar: 18.2,
      g: -0.18,
      b0: 1.62,
      h: 0.058,
    },
    currentHapke: {
      w: 0.485,
      thetaBar: 18.2,
      g: -0.18,
      b0: 1.62,
      h: 0.058,
    },
    signalToNoiseRatioDb: 154.2,
    subSolarPoint: { lat: 0.8, lon: -35.2 },
    subSpacecraftPoint: { lat: 23.6, lon: -47.3 },
    waterIceAbsorptionIndex: 0.02,
    meanReflectance: 0.165,
    spectralBands: ['Panchromatic (450-900 nm) Super-Res 0.25m'],
    pds4XmlLabel: `<?xml version="1.0" encoding="UTF-8"?>
<Product_Observational xmlns="http://pds.nasa.gov/pds4/pds/v1"
  xmlns:isro="http://isro.gov.in/pds4/mission/ch2">
  <Identification_Area>
    <logical_identifier>urn:isro:pds:ch2_ohrc_aristarchus_sr_025m</logical_identifier>
    <version_id>2.0</version_id>
    <title>Chandrayaan-2 OHRC Super-Resolution 0.25m Mosaic - Aristarchus</title>
  </Identification_Area>
  <Observation_Area>
    <Time_Coordinates>
      <start_date_time>2024-01-03T10:05:17.645Z</start_date_time>
      <stop_date_time>2024-01-03T10:05:42.912Z</stop_date_time>
    </Time_Coordinates>
  </Observation_Area>
</Product_Observational>`,
  },
  {
    id: 'CH3_IIRS_SHACKLETON_ICE',
    mission: 'Chandrayaan-3',
    instrument: 'IIRS (Imaging Infrared Spectrometer)',
    productUri: 'URN:ISRO:CH3:IIRS:RAW:L1:20230914T031852_SHACKLETON_PSR.ZIP',
    targetFeature: 'Shackleton Crater Rim (Permanently Shadowed Volatiles)',
    targetCoordinates: {
      lat: -89.90,
      lon: 0.00,
      latStr: '89.900° S',
      lonStr: '0.000° E',
    },
    footprintPolygon: [
      [-89.6, -15.0],
      [-89.6, 15.0],
      [-90.0, 45.0],
      [-90.0, -45.0],
    ],
    acquisitionTimeUtc: '2023-09-14T03:18:52.102Z',
    geometry: {
      incidenceDeg: 88.75,
      emissionDeg: 14.10,
      phaseDeg: 78.40,
      solarAzimuthDeg: 210.4,
      spacecraftAltitudeKm: 98.6,
      groundSamplingDistanceM: 8.0,
      solarElevationDeg: 1.25,
    },
    initialHapke: {
      w: 0.215,
      thetaBar: 31.8,
      g: -0.28,
      b0: 1.28,
      h: 0.082,
    },
    currentHapke: {
      w: 0.215,
      thetaBar: 31.8,
      g: -0.28,
      b0: 1.28,
      h: 0.082,
    },
    signalToNoiseRatioDb: 139.6,
    subSolarPoint: { lat: -0.4, lon: 110.5 },
    subSpacecraftPoint: { lat: -89.8, lon: 2.1 },
    waterIceAbsorptionIndex: 0.78,
    meanReflectance: 0.042,
    spectralBands: ['0.8 - 5.0 µm (256 Spectral Channels, 2.9µm H2O Band Focus)'],
    pds4XmlLabel: `<?xml version="1.0" encoding="UTF-8"?>
<Product_Observational xmlns="http://pds.nasa.gov/pds4/pds/v1">
  <Identification_Area>
    <logical_identifier>urn:isro:pds:ch3_iirs_shackleton_h2o_ice</logical_identifier>
    <version_id>1.0</version_id>
    <title>Chandrayaan-3 IIRS Hyperspectral Cube - Shackleton 2.9um Band</title>
  </Identification_Area>
</Product_Observational>`,
  },
  {
    id: 'CH2_TMC2_TYCHO_EJECTA',
    mission: 'Chandrayaan-2',
    instrument: 'TMC-2 (Stereo Triplet Mode)',
    productUri: 'URN:ISRO:CH2:TMC2:RAW:L1:20231108T182245_TYCHO_STEREO.ZIP',
    targetFeature: 'Tycho Crater (Central Peak & Impact Melt Sheet)',
    targetCoordinates: {
      lat: -43.31,
      lon: -11.36,
      latStr: '43.310° S',
      lonStr: '11.360° W',
    },
    footprintPolygon: [
      [-42.5, -12.5],
      [-42.6, -10.2],
      [-44.1, -10.4],
      [-44.0, -12.6],
    ],
    acquisitionTimeUtc: '2023-11-08T18:22:45.890Z',
    geometry: {
      incidenceDeg: 38.60,
      emissionDeg: 12.30,
      phaseDeg: 28.50,
      solarAzimuthDeg: 45.2,
      spacecraftAltitudeKm: 101.4,
      groundSamplingDistanceM: 5.0,
      solarElevationDeg: 51.4,
    },
    initialHapke: {
      w: 0.412,
      thetaBar: 21.0,
      g: -0.23,
      b0: 1.85,
      h: 0.052,
    },
    currentHapke: {
      w: 0.412,
      thetaBar: 21.0,
      g: -0.23,
      b0: 1.85,
      h: 0.052,
    },
    signalToNoiseRatioDb: 161.0,
    subSolarPoint: { lat: -0.2, lon: -20.4 },
    subSpacecraftPoint: { lat: -43.1, lon: -11.1 },
    waterIceAbsorptionIndex: 0.04,
    meanReflectance: 0.138,
    spectralBands: ['Fore (Pan)', 'Nadir (Pan)', 'Aft (Pan) Stereo Triplet'],
    pds4XmlLabel: `<?xml version="1.0" encoding="UTF-8"?>
<Product_Observational xmlns="http://pds.nasa.gov/pds4/pds/v1">
  <Identification_Area>
    <logical_identifier>urn:isro:pds:ch2_tmc2_tycho_stereo_triplet</logical_identifier>
    <title>Chandrayaan-2 TMC-2 Stereo DEM - Tycho Central Peak</title>
  </Identification_Area>
</Product_Observational>`,
  },
];
