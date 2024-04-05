//---- INPUT TEXT ----//

export const arrayInpText = [
                              [
                                {
                                  id: "inpCompanyContact",
                                  inputText: (
                                    <input type="text" name="company" id="company" placeholder="Société" />
                                  ),
                                  labelText: <label htmlFor="company">Société</label>,
                                },
                                {
                                  id: "inpWebsiteContact",
                                  inputText: (
                                    <input
                                      type="text"
                                      name="websiteAlready"
                                      id="websiteAlready"
                                      placeholder="Possédez vous un site internet ou un domaine ?"
                                    />
                                  ),
                                  labelText: (
                                    <label htmlFor="websiteAlready">
                                      Possédez vous un site internet ou un domaine ?
                                    </label>
                                  ),
                                },
                              ],
                              [
                                {
                                  id: "inpNameContact",
                                  inputText: (
                                    <input type="text" name="name" id="name" placeholder="Nom :*" />
                                  ),
                                  labelText: <label htmlFor="name">Nom</label>,
                                },
                                {
                                  id: "inpFirstnameContact",
                                  inputText: (
                                    <input
                                      type="text"
                                      name="firstName"
                                      id="firstName"
                                      placeholder="Prénom :*"
                                    />
                                  ),
                                  labelText: <label htmlFor="firstName">Prénom</label>,
                                },
                              ],
                            ];

//---- INPUT RADIO ----//

export const arrayInpRadio = [
                              [
                                "Mr.",
                                "Mlle.",
                                "Mme.",
                                "Ne se prononce pas",
                              ],
                              [
                                "oui",
                                "non",
                              ],
                            ];
