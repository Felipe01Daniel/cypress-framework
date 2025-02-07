Feature: Login de usuario

    
    Scenario: Login com sucesso
        Given que o usuário acessa a página de login
        When ele preenche o campo "username"
        And preenche o campo "password"
        And clica no botão submit
        Then ele deve ser redirecionado para a página inicial com sucesso
        And deve ver a mensagem de boas-vindas "Logged In Successfully"