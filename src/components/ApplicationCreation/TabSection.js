import { useState } from "react";
import {
  Collapse,
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Radio,
  Popover,
} from "antd";

import {
  FunctionOutlined,
  PlusSquareFilled,
  ApartmentOutlined,
} from "@ant-design/icons";
import { GiConsoleController } from "react-icons/gi";

const { Panel } = Collapse;
const { Option } = Select;
const { TextArea } = Input;

const TabSection = ({ form, setForm }) => {
  const [drawer, setDrawer] = useState({
    form: null,
    visible: false,
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const showDrawer = (form) => {
    setDrawer({
      form: form,
      visible: true,
    });
  };
  const hideDrawer = () => {
    setDrawer({
      visible: false,
    });
  };
  const onFinish = (values) => {
    setForm({
      ...form,
      ...values,
    });
    console.log("Success:", form);
    setDrawer({
      visible: false,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const country_list = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const dummy_names = [
    {
      first_name: "Lita",
      last_name: "Seccombe",
    },
    {
      first_name: "Maitilde",
      last_name: "Grinyakin",
    },
    {
      first_name: "Dorry",
      last_name: "Tesh",
    },
    {
      first_name: "Barrett",
      last_name: "Canto",
    },
    {
      first_name: "Rosana",
      last_name: "Westbrook",
    },
    {
      first_name: "Nelle",
      last_name: "Upshall",
    },
    {
      first_name: "Paula",
      last_name: "Clench",
    },
    {
      first_name: "Gregoire",
      last_name: "Kyneton",
    },
    {
      first_name: "Yank",
      last_name: "Segges",
    },
    {
      first_name: "Ashley",
      last_name: "Foukx",
    },
    {
      first_name: "Rogerio",
      last_name: "Heinzel",
    },
    {
      first_name: "Fulton",
      last_name: "Staniland",
    },
    {
      first_name: "Katti",
      last_name: "Pestridge",
    },
    {
      first_name: "Gerrie",
      last_name: "Cattroll",
    },
    {
      first_name: "Jacques",
      last_name: "MacRinn",
    },
    {
      first_name: "Jami",
      last_name: "Godthaab",
    },
    {
      first_name: "Frank",
      last_name: "Giddons",
    },
    {
      first_name: "Cristine",
      last_name: "Chaikovski",
    },
    {
      first_name: "Robinson",
      last_name: "Lindegard",
    },
    {
      first_name: "Adrianna",
      last_name: "Prettyman",
    },
    {
      first_name: "Pammie",
      last_name: "Devonish",
    },
    {
      first_name: "Farrell",
      last_name: "Horbath",
    },
    {
      first_name: "Sherry",
      last_name: "Connochie",
    },
    {
      first_name: "Ancell",
      last_name: "Cardenas",
    },
    {
      first_name: "Rodolfo",
      last_name: "Lowbridge",
    },
    {
      first_name: "Lusa",
      last_name: "Elsip",
    },
    {
      first_name: "Alexander",
      last_name: "Wringe",
    },
    {
      first_name: "Farand",
      last_name: "Shenley",
    },
    {
      first_name: "Boote",
      last_name: "Bourgourd",
    },
    {
      first_name: "Janean",
      last_name: "Okill",
    },
    {
      first_name: "Alvis",
      last_name: "Youel",
    },
    {
      first_name: "Luise",
      last_name: "Landsbury",
    },
    {
      first_name: "Hildagard",
      last_name: "Doohey",
    },
    {
      first_name: "Hadley",
      last_name: "Gerant",
    },
    {
      first_name: "Quintin",
      last_name: "Laidler",
    },
    {
      first_name: "Lonnard",
      last_name: "Girodon",
    },
    {
      first_name: "Renee",
      last_name: "Skoof",
    },
    {
      first_name: "Ola",
      last_name: "Schwanden",
    },
    {
      first_name: "Nita",
      last_name: "Reasun",
    },
    {
      first_name: "Judie",
      last_name: "Piwell",
    },
    {
      first_name: "Teriann",
      last_name: "Nussen",
    },
    {
      first_name: "Hedwig",
      last_name: "Delph",
    },
    {
      first_name: "Josie",
      last_name: "Stotherfield",
    },
    {
      first_name: "Georgette",
      last_name: "Ollin",
    },
    {
      first_name: "Colene",
      last_name: "Le Gassick",
    },
    {
      first_name: "Vivianna",
      last_name: "Saipy",
    },
    {
      first_name: "Nataline",
      last_name: "Veltman",
    },
    {
      first_name: "Benito",
      last_name: "Beaman",
    },
    {
      first_name: "Olivia",
      last_name: "Aubrun",
    },
    {
      first_name: "Nichols",
      last_name: "Downe",
    },
    {
      first_name: "Henry",
      last_name: "Tuxsell",
    },
    {
      first_name: "Dawn",
      last_name: "De Bischof",
    },
    {
      first_name: "Helsa",
      last_name: "Berthomieu",
    },
    {
      first_name: "Ira",
      last_name: "Humpage",
    },
    {
      first_name: "Clari",
      last_name: "Skill",
    },
    {
      first_name: "Percy",
      last_name: "Trumper",
    },
    {
      first_name: "Nicol",
      last_name: "Ivatt",
    },
    {
      first_name: "Susette",
      last_name: "Bachmann",
    },
    {
      first_name: "Emalee",
      last_name: "Brokenshaw",
    },
    {
      first_name: "Mathe",
      last_name: "Skeleton",
    },
    {
      first_name: "De",
      last_name: "Najara",
    },
    {
      first_name: "Brewer",
      last_name: "Patesel",
    },
    {
      first_name: "Travers",
      last_name: "Goldster",
    },
    {
      first_name: "Fitz",
      last_name: "MacPharlain",
    },
    {
      first_name: "Lois",
      last_name: "Dumbreck",
    },
    {
      first_name: "Traver",
      last_name: "Booeln",
    },
    {
      first_name: "Palmer",
      last_name: "Collett",
    },
    {
      first_name: "Rhianna",
      last_name: "Shakespear",
    },
    {
      first_name: "Kerk",
      last_name: "Foulis",
    },
    {
      first_name: "Stirling",
      last_name: "Carss",
    },
    {
      first_name: "Gene",
      last_name: "Topling",
    },
    {
      first_name: "Philly",
      last_name: "Elsip",
    },
    {
      first_name: "Cleve",
      last_name: "Kellie",
    },
    {
      first_name: "Rufus",
      last_name: "Quickfall",
    },
    {
      first_name: "Barnett",
      last_name: "Karel",
    },
    {
      first_name: "Garrard",
      last_name: "Dicke",
    },
    {
      first_name: "Langston",
      last_name: "Fligg",
    },
    {
      first_name: "Marysa",
      last_name: "Ewington",
    },
    {
      first_name: "Joanna",
      last_name: "Hens",
    },
    {
      first_name: "Edita",
      last_name: "Wabersich",
    },
    {
      first_name: "Shaughn",
      last_name: "Paddie",
    },
    {
      first_name: "Shaw",
      last_name: "Everest",
    },
    {
      first_name: "Fiorenze",
      last_name: "Byram",
    },
    {
      first_name: "Sherm",
      last_name: "Manuelli",
    },
    {
      first_name: "Gisella",
      last_name: "Willison",
    },
    {
      first_name: "Engelbert",
      last_name: "Blei",
    },
    {
      first_name: "Gretel",
      last_name: "Weitzel",
    },
    {
      first_name: "Maddie",
      last_name: "Goodinge",
    },
    {
      first_name: "Freddie",
      last_name: "Cowoppe",
    },
    {
      first_name: "Luigi",
      last_name: "Leaves",
    },
    {
      first_name: "Kellen",
      last_name: "Jakubiak",
    },
    {
      first_name: "Deloria",
      last_name: "Chezelle",
    },
    {
      first_name: "Terrence",
      last_name: "Gerrans",
    },
    {
      first_name: "Evangelina",
      last_name: "Trusslove",
    },
    {
      first_name: "Robert",
      last_name: "Bury",
    },
    {
      first_name: "Rusty",
      last_name: "Wank",
    },
    {
      first_name: "Augustine",
      last_name: "Leavey",
    },
    {
      first_name: "Ruthann",
      last_name: "Rookeby",
    },
    {
      first_name: "Charo",
      last_name: "Goodread",
    },
    {
      first_name: "Malena",
      last_name: "Pimer",
    },
  ];

  const dummy_companies = [
    "Cardinal Health",
    "Pfizer Labs, Division of Pfizer Inc",
    "Teva Pharmaceuticals USA Inc",
    "Similasan Corporation",
    "Mission Hills S.A de C.V",
    "Physicians Total Care, Inc.",
    "Exelan Pharmaceuticals Inc.",
    "Fresenius Kabi USA, LLC",
    "Shopko Stores Operating Co., LLC",
    "Preferred Pharmaceuticals, Inc",
    "NeoStrata Company Inc.",
    "Best Choice",
    "Procter & Gamble Manufacturing Co.",
    "Novartis Pharmaceuticals Corporation",
    "Laboratoires Clarins S.A.",
    "BD Rx Inc.",
    "REMEDYREPACK INC.",
    "Dolgencorp, LLC",
    "Sandoz Inc.",
    "H.J. Harkins Company, Inc.",
    "Humco Holding Group, Inc.",
    "Mylan Pharmaceuticals Inc.",
    "Ecolab Inc.",
    "Pacific Naturals",
    "Major Pharmaceuticals",
    "Aurobindo Pharma Limited",
    "Teva Pharmaceuticals USA Inc",
    "Rise Global Products",
    "JAFRA COSMETICS INTERNATIONAL",
    "J. A. Cosmetics U.S. INC",
    "Watson Laboratories, Inc.",
    "TRIGEN Laboratories, Inc.",
    "Medline Industries, Inc.",
    "REMEDYREPACK INC.",
    "Cardinal Health",
    "Chattem, Inc.",
    "Unit Dose Services",
    "Ningbo Pulisi Daily Chemical Products Co., Ltd.",
    "H E B",
    "American Health Packaging",
    "Procter & Gamble Manufacturing Company",
    "AvKARE, Inc.",
    "American Health Packaging",
    "Hospira, Inc.",
    "Amerisource Bergen",
    "HOMEOLAB USA INC.",
    "Lake Erie Medical DBA Quality Care Products LLC",
    "General Injectables & Vaccines, Inc",
    "Kroger Company",
    "RedPharm Drug Inc.",
  ];

  const dummy_product_groups = [
    "FAMOTIDINE",
    "Alcohol",
    "Acetaminophen",
    "NIACIN",
    "ofloxacin",
    "Naproxen",
    "Octinoxate and Titanium Dioxide",
    "Naphazoline Hydrochloride and Polyethylene glycol 300",
    "MENTHOL",
    "Oak White",
    "Antimon. crud., Apis mel., Arsenicum alb., Berber. vulg., Bovista, Bryonia, Cantharis, Chelidonium majus, Croton, Dulcamara, Graphites, Histaminum hydrochloricum, Lycopodium, Mezereum, Nux vom., Petroleum, Pulex irritans, Pulsatilla, Rhus toxicodendron, Sarsaparilla, Sulphur, Echinacea, Rumex crisp., Taraxacum, Urtica ur.",
    "Acyclovir",
    "Mirtazapine",
    "TITANIUM DIOXIDE, OCTINOXATE, ZINC OXIDE",
    "Trolamine Salicylate",
    "dalteparin sodium",
    "TRICLOSAN",
    "diphenhydramine hydrochloride and zinc acetate",
    "Fluvastatin",
    "Chamomilla, Natrum Sulphuricum, Sanguinaria Canadensis, Glutathione",
    "Fenofibrate",
    "Calcium antacid",
    "Menadione",
    "sodium fluoride",
    "Treatment Set TS351030",
    "Acetaminophen, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride",
    "Chlordiazepoxide Hydrochloride",
    "Methimazole",
    "Nicotine Polacrilex",
    "ACETAMINOPHEN",
    "oxymetazoline hydrochloride",
    "alprazolam",
    "Menthol",
    "OCTINOXATE, OCTOCRYLENE, TITANIUM DIOXIDE, and ZINC OXIDE",
    "TITANIUM DIOXIDE, OCTYLTRIETHOXYSILANE",
    "Budesonide",
    "VANCOMYCIN HYDROCHLORIDE",
    "Tizanidine Hydrochloride",
    "Clonazepam",
    "ALCOHOL",
    "INTERLEUKIN-12 HUMAN RECOMBINANT",
    "Argatroban",
    "Aluminum Chloride",
    "Octinoxate, Octisalate",
    "verapamil hydrochloride",
    "Sulfur and Resorcinol",
    "Allergenic Extracts Alum Precipitated",
  ];
  const dummy_products = [
    "dalteparin sodium Tablet, Oral 600mg / 300mg",
    "TRICLOSAN Tablet, Oral 600mg / 300mg",
    "diphenhydramine hydrochloride and zinc acetate Tablet, Oral 600mg / 300mg",
    "Fluvastatin Tablet, Oral 600mg / 300mg",
    "Chamomilla, Glutathione Tablet, Oral 600mg / 300mg",
    "Fenofibrate Tablet, Oral 600mg / 300mg",
    "Calcium antacid Tablet, Oral 600mg / 300mg",
  ];

  const sections = [
    {
      header: "Reference",
      content: [
        [
          {
            fieldName: "Reference",
            popover: "This reference feild will be populated automatically.",
            fieldValue: "",
          },
          {
            fieldName: "Send for Verification",
            popover:
              "This determines if this record will be sent for additional verification.",
            fieldValue: (
              <Radio.Group onChange={() => {}} defaultValue="no">
                <Radio value="yes">1 - Yes</Radio>
                <Radio value="no">2 - No</Radio>
              </Radio.Group>
            ),
          },
        ],
      ],
    },
    {
      header: "Application Status",
      content: [
        [
          {
            fieldName: (
              <>
                <FunctionOutlined /> Application Status
              </>
            ),
            fieldValue: "Not Approved",
          },
          {
            fieldName: (
              <>
                <FunctionOutlined /> Application Submission Date
              </>
            ),
            fieldValue: "",
          },
        ],
        [
          {
            fieldName: (
              <>
                <FunctionOutlined /> Application Marketing Status
              </>
            ),
            fieldValue: "Never Marketed",
          },
          {
            fieldName: (
              <>
                <FunctionOutlined /> Application Approval Date
              </>
            ),
            fieldValue: "",
          },
        ],
      ],
    },
    {
      header: "Regional Information",
      content: [
        [
          {
            required: true,
            fieldName: "Regulatory Region",
            fieldValue: "plus",
            slug: "regulatory-region",
            form: {
              header: "Regulatory Region",
              content: (
                <Form
                  layout="vertical"
                  hideRequiredMark
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  className="side-form"
                >
                  <div>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="regulatory-region"
                          label="Regulatory Region"
                          rules={[
                            {
                              required: true,
                              message: "Please select a regulatory region",
                            },
                          ]}
                        >
                          <Select
                            defaultOpen={true}
                            dropdownStyle={{}}
                            listHeight={500}
                            showSearch
                            style={{ width: 350 }}
                            placeholder="Select a region"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="Asia">Asia</Option>
                            <Option value="Australia">Australia</Option>
                            <Option value="Canada">Canada</Option>
                            <Option value="Commonwealth-of-Independent-States-(CIS)">
                              Commonwealth of Independent States (CIS)
                            </Option>
                            <Option value="Europe-European-Economic-Area-(EEA)">
                              Europe - European Economic Area (EEA)
                            </Option>
                            <Option value="Europe-Non-EEA">
                              Europe - Non EEA
                            </Option>
                            <Option value="Japan">Japan</Option>
                            <Option value="Latin-America-and-the-Carribbean">
                              Latin America and the Carribbean
                            </Option>
                            <Option value="Middle-East">Middle East</Option>
                            <Option value="New-Zealand">New Zealand</Option>
                            <Option value="North-Africa">North Africa</Option>
                            <Option value="Oceania">Oceania</Option>
                            <Option value="Sub-Saharan-Africa">
                              Sub-Saharan Africa
                            </Option>
                            <Option value="United-States">United States</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                  <div className="btn-section">
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Ok
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              ),
              width: 400,
            },
          },
          {
            required: true,
            fieldName: "Regulatory Authorisation Procedure",
            fieldValue: "plus",
            slug: "regulatory-authorisation-procedure",
            form: {
              header: "Regulatory Authorisation Procedure",
              content: (
                <Form
                  layout="vertical"
                  hideRequiredMark
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  className="side-form"
                >
                  <div>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="regulatory-authorisation-procedure"
                          label="Regulatory Authorisation Procedure"
                          rules={[
                            {
                              required: true,
                              message:
                                "Please select a Regulatory Authorisation Procedure",
                            },
                          ]}
                        >
                          <Select
                            defaultOpen={true}
                            dropdownStyle={{}}
                            listHeight={500}
                            showSearch
                            style={{ width: 350 }}
                            placeholder="Select a region"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="Centralised">Centralised</Option>
                            <Option value="Decentralised">Decentralised</Option>
                            <Option value="Export-Listing">
                              Export Listing
                            </Option>
                            <Option value="Mutual-Recognition">
                              Mutual Recognition
                            </Option>
                            <Option value="National">National</Option>
                            <Option value="National-(Europe-EEA)">
                              National (Europe - EEA)
                            </Option>
                            <Option value="National-(US)">National (US)</Option>
                            <Option value="Registration-Exempt">
                              Registration Exempt
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                  <div className="btn-section">
                    <Form.Item>
                      <Button
                        htmlType="submit"
                        type="primary"
                        style={{ marginRight: 8 }}
                      >
                        Add
                      </Button>
                    </Form.Item>
                    <Form.Item>
                      <Button onClick={hideDrawer}>Cancel</Button>
                    </Form.Item>
                  </div>
                </Form>
              ),
              width: 400,
            },
          },
          {
            required: true,
            fieldName: "Country/Countries",
            popover:
              "Mandatory field that will impact other fields like Assesing HA.",
            fieldValue: "plus",
            slug: "country/countries",
            form: {
              header: "Country/Countries",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="country/countries"
                      label="Country/Countries"
                      rules={[
                        {
                          required: true,
                          message:
                            "Please select a Country or multiple Countries",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        mode="multiple"
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select a region"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {country_list?.map((country) => {
                          let label = country;
                          let value = country.split(" ").join("_");
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
        ],
      ],
    },
    {
      header: "Roles and Responsibilities",
      content: [
        [
          {
            fieldName: "Regulatory Lead",
            fieldValue: "plus",
            slug: "Regulatory-Lead",
            form: {
              header: "Regulatory Lead",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Regulatory-Lead"
                      label="Regulatory Lead"
                      rules={[
                        {
                          required: true,
                          message: "Please select a Regulatory Lead",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select a user"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_names?.map(({ first_name, last_name }) => {
                          let label =
                            last_name.toUpperCase() +
                            " " +
                            capitalizeFirstLetter(first_name);
                          let value =
                            last_name.toUpperCase() +
                            "_" +
                            capitalizeFirstLetter(first_name);
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "Change Control Lead",
            fieldValue: "plus",
            slug: "Change-Control-Lead",
            form: {
              header: "Change Control Lead",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Change-Control-Lead"
                      label="Change Control Lead"
                      rules={[
                        {
                          required: true,
                          message: "Please select a Change Control Lead",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select a user"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_names?.map(({ first_name, last_name }) => {
                          let label =
                            last_name.toUpperCase() +
                            " " +
                            capitalizeFirstLetter(first_name);
                          let value =
                            last_name.toUpperCase() +
                            "_" +
                            capitalizeFirstLetter(first_name);
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "Responsible Agent",
            fieldValue: "plus",
            slug: "Regulatory-Team",
            form: {
              header: "Responsible Agent",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Responsible-Agent"
                      label="Responsible Agent"
                      rules={[
                        {
                          required: true,
                          message: "Please select a Responsible Agent",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an agent"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_companies?.map((company) => {
                          let label = company;
                          let value = company.split(" ").join("_");
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
        ],
        [
          {
            fieldName: "Regulatory Team",
            fieldValue: "plus",
            slug: "Regulatory-Team",
            form: {
              header: "Regulatory Team",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Regulatory-Team"
                      label="Regulatory Team"
                      rules={[
                        {
                          required: true,
                          message: "Please select a Regulatory Team",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an agent"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_companies?.map((company) => {
                          let label = company;
                          let value = company.split(" ").join("_");
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "Labelling Lead",
            fieldValue: "plus",
            slug: "Labelling-Lead",
            form: {
              header: "Labelling Lead",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Labelling-Lead"
                      label="Labelling Lead"
                      rules={[
                        {
                          required: true,
                          message: "Please select a Labelling Lead",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select a user"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_names?.map(({ first_name, last_name }) => {
                          let label =
                            last_name.toUpperCase() +
                            " " +
                            capitalizeFirstLetter(first_name);
                          let value =
                            last_name.toUpperCase() +
                            "_" +
                            capitalizeFirstLetter(first_name);
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
        ],
      ],
    },
    {
      header: "Products",
      content: [
        [
          {
            required: true,
            fieldName: "Product Group",
            fieldValue: "plus",
            slug: "Product-Group",
            form: {
              header: "Product Group",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Product-Group"
                      label="Product Group"
                      rules={[
                        {
                          required: true,
                          message: "Please select a Product Group",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select a Product Group"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_product_groups?.map((product_group) => {
                          let label = product_group;
                          let value = product_group.split(" ").join("_");
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "Product",
            fieldValue: "plus",
            slug: "Product",
            form: {
              header: "Product",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Product"
                      label="Product"
                      rules={[
                        {
                          required: true,
                          message: "Please select a Product",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select a Product"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_products?.map((product) => {
                          let label = product;
                          let value = product.split(" ").join("_");
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: (
              <>
                <ApartmentOutlined /> Product Type
              </>
            ),
            fieldValue: "",
          },
        ],
      ],
    },
    {
      header: "Application Information",
      content: [
        [
          {
            required: true,
            fieldName: "Application Category",
            fieldValue: "plus",
            slug: "Application-Category",
            form: {
              header: "Application Category",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Application-Category"
                      label="Application Category"
                      rules={[
                        {
                          required: true,
                          message: "Please select an Application Category",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an Application Category"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="Device_Application">
                          Device Application
                        </Option>
                        <Option value="Pharma_+_Device_Application">
                          Pharma + Device_Application
                        </Option>
                        <Option value="Pharma_Application">
                          Pharma Application
                        </Option>
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "Application Name",
            type: "text_input",
            fieldValue: (
              <Form
                onValuesChange={onFinish}
                layout="vertical"
                style={{ width: "100%" }}
              >
                <Form.Item
                  hideRequiredMark
                  name="Application-Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input Application Name",
                    },
                  ]}
                  style={{ marginBottom: 0 }}
                >
                  <Input />
                </Form.Item>
              </Form>
            ),
            slug: "Application-Name",
          },
          {
            fieldName: "Application Number",
            type: "text_input",
            fieldValue: (
              <Form onValuesChange={onFinish} layout="vertical">
                <Form.Item
                  hideRequiredMark
                  name="Application-Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input Application Number",
                    },
                  ]}
                  style={{ marginBottom: 0 }}
                >
                  <Input />
                </Form.Item>
              </Form>
            ),
            slug: "Application-Number",
          },
          {
            required: true,
            fieldName: "Application Type",
            fieldValue: "plus",
            slug: "Application-Type",
            form: {
              header: "Application Type",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Application-Type"
                      label="Application Type"
                      rules={[
                        {
                          required: true,
                          message: "Please select an Application Type",
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an Application Type"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="510(k)">510(k)</Option>
                        <Option value="510(k)_Exempt">510(k) Exempt</Option>
                        <Option value="Abbreviated_New_Animal_Drug_Application_(ANADA)">
                          Abbreviated New Animal Drug Application (ANADA)
                        </Option>
                        <Option value="Abbreviated_New_Drug_Application_(ANDA)">
                          Abbreviated New Drug Application (ANDA)
                        </Option>
                        <Option value="Abbreviated_New_Drug_Submission_(ANDS)">
                          Abbreviated New Drug Submission (ANDS)
                        </Option>
                        <Option value="Active_Substance_Master_File">
                          Active Substance Master File
                        </Option>
                        <Option value="Authorized_Herbal_Medicinal_Product">
                          Authorized Herbal Medicinal Product
                        </Option>
                        <Option value="Authorized_Homeopathic_Medicinal_Product">
                          Authorized Homeopathic Medicinal Product
                        </Option>
                        <Option value="Biologics_Application">
                          Biologics Application
                        </Option>
                        <Option value="Biologics_License_Application_(BLA)">
                          Biologics License Application (BLA)
                        </Option>
                        <Option value="BR_Innovative">BR Innovative</Option>
                        <Option value="BR_Similar">BR Similar</Option>
                        <Option value="BR_Specific">BR Specific</Option>
                        <Option value="Category_1_(C1)">Category 1 (C1)</Option>
                        <Option value="CE_Mark">CE Mark</Option>
                        <Option value="CH_biosimilar">CH biosimilar</Option>
                        <Option value="CH_generic">CH generic</Option>
                        <Option value="CH_generic_Art._13">
                          CH generic Art. 13
                        </Option>
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "Applicant",
            fieldValue: "plus",
            slug: "Applicant",
            form: {
              header: "Applicant",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Applicant"
                      label="Applicant"
                      rules={[
                        {
                          required: true,
                          message: "Please select an Applicant",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an Applicant"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_companies?.map((company) => {
                          let label = company;
                          let value = company.split(" ").join("_");
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "Buisness Development Partner",
            fieldValue: "plus",
            slug: "Buisness-Development-Partner",
            form: {
              header: "Buisness Development Partner",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Buisness-Development-Partner"
                      label="Buisness Development Partner"
                      rules={[
                        {
                          required: true,
                          message:
                            "Please select an Buisness Development Partner",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an Buisness Development Partner"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_companies?.map((company) => {
                          let label = company;
                          let value = company.split(" ").join("_");
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "Part of Company Acquisition",
            fieldValue: "plus",
            slug: "Part-of-Company-Acquisition",
            form: {
              header: "Part of Company Acquisition",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Part-of-Company-Acquisition"
                      label="Part of Company Acquisition"
                      rules={[
                        {
                          required: true,
                          message: "Please select Yes or No",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select Yes or No"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="No">No</Option>
                        <Option value="Yes">Yes</Option>
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "Application Folder ID",
            type: "text_input",
            fieldValue: (
              <Form onValuesChange={onFinish} layout="vertical">
                <Form.Item
                  hideRequiredMark
                  name="Application-Folder-ID"
                  rules={[
                    {
                      required: true,
                      message: "Please input Application Folder ID",
                    },
                  ]}
                  style={{ marginBottom: 0 }}
                >
                  <Input />
                </Form.Item>
              </Form>
            ),
            slug: "Application-Folder-ID",
          },
          {
            fieldName: "Application Dossier Format",
            fieldValue: "plus",
            slug: "Application-Dossier-Format",
            form: {
              header: "Application Dossier Format",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Application-Dossier-Format"
                      label="Application Dossier Format"
                      rules={[
                        {
                          required: true,
                          message:
                            "Please select an Application Dossier Format",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an Application Dossier Format"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="ACTD">ACTD</Option>
                        <Option value="eCTD">eCTD</Option>
                        <Option value="Electronic">Electronic</Option>
                        <Option value="PDF_/_Paper">PDF / Paper</Option>
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "SPP Ref. Number",
            type: "text_input",
            fieldValue: (
              <Form onValuesChange={onFinish} layout="vertical">
                <Form.Item
                  hideRequiredMark
                  name="SPP-Ref.-Number"
                  rules={[
                    {
                      message: "Please input SPP Ref. Number",
                    },
                  ]}
                  style={{ marginBottom: 0 }}
                >
                  <Input />
                </Form.Item>
              </Form>
            ),
            slug: "SPP-Ref.-Number",
          },
          {
            fieldName: "Application Comment",
            type: "text_input",
            fieldValue: (
              <Form
                onValuesChange={onFinish}
                layout="vertical"
                style={{ width: "100%" }}
              >
                <Form.Item
                  hideRequiredMark
                  name="Application-Comment"
                  style={{ marginBottom: 0 }}
                >
                  <TextArea rows={3} />
                </Form.Item>
              </Form>
            ),
            slug: "Application-Comment",
          },
          {
            fieldName: "Related Application(s)",
            fieldValue: "plus",
            slug: "Related-Application(s)",
            form: {
              header: "Related Application(s)",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Related-Application(s)"
                      label="Related Application(s)"
                      rules={[
                        {
                          required: true,
                          message: "Please select an Related Application(s)",
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an Related Application"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {dummy_companies?.map((company) => {
                          let label = company;
                          let value = company.split(" ").join("_");
                          return (
                            <Option key={value} value={value}>
                              {label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
        ],
        [
          {
            fieldName: "Regulatory Categorisation",
            fieldValue: "plus",
            slug: "Regulatory-Categorisation",
            form: {
              header: "Regulatory Categorisation",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Regulatory-Categorisation"
                      label="Regulatory Categorisation"
                      rules={[
                        {
                          required: true,
                          message: "Please select an Regulatory Categorisation",
                        },
                      ]}
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an Application Category"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="Drug_Master_File">
                          Drug Master File
                        </Option>
                        <Option value="Human_-_Biosimilar">
                          Human - Biosimilar
                        </Option>
                        <Option value="Human_-_Branded">Human - Branded</Option>
                        <Option value="Human_-_Consumer Health">
                          Human - Consumer Health
                        </Option>
                        <Option value="Human_-_Generic">Human - Generic</Option>
                        <Option value="Medical_Device">Medical Device</Option>
                        <Option value="Vet_-_Branded">Vet - Branded</Option>
                        <Option value="Vet_-_Generic">Vet - Generic</Option>
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "",
            fieldValue: "",
          },
          {
            fieldName: "Previous Application Number",
            type: "text_input",
            fieldValue: (
              <Form onValuesChange={onFinish} layout="vertical">
                <Form.Item
                  hideRequiredMark
                  name="Previous-Application-Number"
                  style={{ marginBottom: 0 }}
                >
                  <Input />
                </Form.Item>
              </Form>
            ),
            slug: "Previous-Application-Number",
          },

          {
            fieldName: "Application Subtype",
            fieldValue: "plus",
            slug: "Application-Subtype",
            form: {
              header: "Application Subtype",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Application-Subtype"
                      label="Application Subtype"
                    >
                      <Select
                        mode="multiple"
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select an Application Type"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="510(k)">510(k)</Option>
                        <Option value="510(k)_Exempt">510(k) Exempt</Option>
                        <Option value="Abbreviated_New_Animal_Drug_Application_(ANADA)">
                          Abbreviated New Animal Drug Application (ANADA)
                        </Option>
                        <Option value="Abbreviated_New_Drug_Application_(ANDA)">
                          Abbreviated New Drug Application (ANDA)
                        </Option>
                        <Option value="Abbreviated_New_Drug_Submission_(ANDS)">
                          Abbreviated New Drug Submission (ANDS)
                        </Option>
                        <Option value="Active_Substance_Master_File">
                          Active Substance Master File
                        </Option>
                        <Option value="Authorized_Herbal_Medicinal_Product">
                          Authorized Herbal Medicinal Product
                        </Option>
                        <Option value="Authorized_Homeopathic_Medicinal_Product">
                          Authorized Homeopathic Medicinal Product
                        </Option>
                        <Option value="Biologics_Application">
                          Biologics Application
                        </Option>
                        <Option value="Biologics_License_Application_(BLA)">
                          Biologics License Application (BLA)
                        </Option>
                        <Option value="BR_Innovative">BR Innovative</Option>
                        <Option value="BR_Similar">BR Similar</Option>
                        <Option value="BR_Specific">BR Specific</Option>
                        <Option value="Category_1_(C1)">Category 1 (C1)</Option>
                        <Option value="CE_Mark">CE Mark</Option>
                        <Option value="CH_biosimilar">CH biosimilar</Option>
                        <Option value="CH_generic">CH generic</Option>
                        <Option value="CH_generic_Art._13">
                          CH generic Art. 13
                        </Option>
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: (
              <>
                <ApartmentOutlined /> Applicant Organisation
              </>
            ),
            fieldValue: "",
          },
          {
            fieldName: "",
            fieldValue: "",
          },
          {
            fieldName: "",
            fieldValue: "",
          },
          {
            fieldName: "D2 Application Description",
            type: "text_input",
            fieldValue: (
              <Form
                onValuesChange={onFinish}
                layout="vertical"
                style={{ width: "100%" }}
              >
                <Form.Item
                  hideRequiredMark
                  name="D2-Application-Description"
                  style={{ marginBottom: 0 }}
                >
                  <Input />
                </Form.Item>
              </Form>
            ),
            slug: "D2-Application-Description",
          },
          {
            fieldName: "Under Dormant Dossier Review",
            fieldValue: "plus",
            slug: "Under-Dormant-Dossier-Review",
            form: {
              header: "Under Dormant Dossier Review",
              content: (
                <FormComponent
                  fields={
                    <Form.Item
                      name="Under-Dormant-Dossier-Review"
                      label="Under Dormant Dossier Review"
                    >
                      <Select
                        defaultOpen={true}
                        dropdownStyle={{}}
                        listHeight={500}
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select Yes or No"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="No">No</Option>
                        <Option value="Yes">Yes</Option>
                      </Select>
                    </Form.Item>
                  }
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  hideDrawer={hideDrawer}
                />
              ),
              width: 400,
            },
          },
          {
            fieldName: "",
            fieldValue: "",
          },
          {
            fieldName: "",
            fieldValue: "",
          },
          {
            fieldName: "",
            fieldValue: "",
          },
          {
            fieldName: "",
            fieldValue: "",
          },
        ],
      ],
    },
    {
      header: "Registered Products",
      content: [
        [
          {
            fieldName: " ",
            fieldValue: " ",
          },
        ],
      ],
    },
    {
      header: "Registered Sites",
      content: [
        [
          {
            fieldName: " ",
            fieldValue: " ",
          },
        ],
      ],
    },
    {
      header: "Marketing Authorisations",
      content: [
        [
          {
            fieldName: " ",
            fieldValue: " ",
          },
        ],
      ],
    },
    {
      header: "Registered Packaging",
      content: [
        [
          {
            fieldName: " ",
            fieldValue: " ",
          },
        ],
      ],
    },
    {
      header: "Activities and Communications",
      content: [
        [
          {
            fieldName: " ",
            fieldValue: " ",
          },
        ],
      ],
    },
  ];

  return (
    <>
      <div
        style={{
          flex: 1,
          backgroundColor: "white",
          flexDirection: "column",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 30,
            minHeight: 45,
            backgroundColor: "#fff",
            border: "1px solid rgb(228,228,228)",
          }}
        >
          <div className="tab-option">
            <p style={{ margin: 0 }}>Workflow</p>
          </div>
          <div className="tab-option active">
            <p style={{ margin: 0 }}>Form</p>
          </div>
          <div className="tab-option">
            <p style={{ margin: 0 }}>Comments</p>
          </div>
        </div>

        <div
          style={{
            flexDirection: "column",
            padding: 20,
            overflowY: "scroll",
          }}
        >
          <Collapse
            defaultActiveKey={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            onChange={(key) => console.log(key)}
            className="collapse-section"
          >
            {sections.map((panel, index) => (
              <Panel header={`${panel.header}`} key={index}>
                <div>
                  {/* Each child column */}
                  {panel.content?.map((col, index) => (
                    <div className="input-col" key={index}>
                      {/* Input row within column */}
                      {col.map((row, index) => (
                        <div className={`input-row ${row?.slug}`} key={index}>
                          {/* Input Name */}
                          {/* Popover */}
                          {row?.popover ? (
                            <Popover
                              content={
                                <div style={{ maxWidth: 300 }}>
                                  {row?.popover}
                                </div>
                              }
                              title={row?.fieldName}
                            >
                              <div className="input-name">
                                {row?.required ? (
                                  <>
                                    {row?.fieldName}
                                    <span className="required-field">*</span>
                                  </>
                                ) : (
                                  row?.fieldName
                                )}
                              </div>
                            </Popover>
                          ) : (
                            <div className="input-name">
                              {row?.required ? (
                                <>
                                  {row?.fieldName}
                                  <span className="required-field">*</span>
                                </>
                              ) : (
                                row?.fieldName
                              )}
                            </div>
                          )}
                          {/* Selected Value */}
                          <div className="input-value">
                            {row?.fieldValue == "plus" ? (
                              <PlusSquareFilled
                                className={`plus-icon ${
                                  form[row?.slug] && "entered"
                                }`}
                                onClick={() => showDrawer(row?.form)}
                              />
                            ) : (
                              row?.fieldValue
                            )}
                            {form[row?.slug] &&
                              (Array.isArray(form[row?.slug])
                                ? form[row.slug].map((item) => (
                                    <span className="text-entry" key={item}>
                                      <span>T</span>
                                      {item}
                                    </span>
                                  ))
                                : row?.type !== "text_input" && (
                                    <span className="text-entry">
                                      <span>T</span>
                                      {form[row.slug]}
                                    </span>
                                  ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>

      <Drawer
        title={`${drawer.form?.header}`}
        width={drawer.form?.width}
        onClose={hideDrawer}
        visible={drawer.visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        {drawer.form?.content}
      </Drawer>
    </>
  );
};

const FormComponent = ({ fields, onFinish, onFinishFailed, hideDrawer }) => (
  <Form
    layout="vertical"
    hideRequiredMark
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    className="side-form"
  >
    <div>
      <Row gutter={16}>
        <Col span={12}>{fields}</Col>
      </Row>
    </div>
    <div className="btn-section">
      <Form.Item>
        <Button htmlType="submit" type="primary" style={{ marginRight: 8 }}>
          Add
        </Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={hideDrawer}>Cancel</Button>
      </Form.Item>
    </div>
  </Form>
);

export default TabSection;
